import { useRef, useState, useEffect } from 'react';

export type FAQ = { id: string; question: string; answer: string; time?: number; videoSrc?: string; poster?: string };

export default function DoctorVideoFAQ({
  videoSrc,
  poster,
  faqs,
}: {
  videoSrc: string;
  poster?: string;
  faqs: FAQ[];
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const pendingSeekRef = useRef<number | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(videoSrc);
  const [, setTick] = useState(0);

  // Small force update to allow time-based highlights if needed
  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(iv);
  }, []);

  const formatTime = (s = 0) => {
    const mm = Math.floor(s / 60).toString().padStart(2, '0');
    const ss = Math.floor(s % 60).toString().padStart(2, '0');
    return `${mm}:${ss}`;
  };

  const seekTo = (seconds?: number) => {
    if (!videoRef.current || typeof seconds !== 'number') return;
    try {
      videoRef.current.currentTime = Math.max(0, seconds);
      videoRef.current.play();
      // ensure the video is visible on mobile
      videoRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } catch (e) {
      // some platforms may restrict seek until metadata loaded
      console.warn('seek failed', e);
    }
  };

  // When currentSrc changes, load and perform any pending seek
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    let canceled = false;

    const onLoaded = () => {
      if (canceled) return;
      if (pendingSeekRef.current != null) {
        try {
          vid.currentTime = Math.max(0, pendingSeekRef.current);
          vid.play().catch(() => {});
        } catch (e) {
          console.warn('seek after load failed', e);
        }
        pendingSeekRef.current = null;
      }
    };

    vid.pause();
    vid.addEventListener('loadedmetadata', onLoaded);
    vid.src = currentSrc;
    vid.load();

    return () => {
      canceled = true;
      vid.removeEventListener('loadedmetadata', onLoaded);
    };
  }, [currentSrc]);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 video-faq">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div>
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow">
            <video
              ref={videoRef}
              src={currentSrc}
              poster={poster}
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-sm text-gray-500 mt-2">Click a question to jump to the relevant part of the video.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Common questions</h3>
          <div className="space-y-3">
            {faqs.map((f) => {
              const isOpen = openId === f.id;
              return (
                <div key={f.id} className="border rounded-lg">
                  <button
                    aria-expanded={isOpen}
                    aria-controls={`faq-${f.id}`}
                          onClick={() => {
                            setOpenId(isOpen ? null : f.id);
                            // If this FAQ has its own video, switch to it and seek when ready
                              if (!isOpen && f.videoSrc) {
                                // set pending seek time: if time provided use it, otherwise start at 0
                                pendingSeekRef.current = typeof f.time === 'number' ? f.time : 0;
                                if (f.videoSrc !== currentSrc) {
                                  setCurrentSrc(f.videoSrc);
                                } else {
                                  // same src: seek and play (from start if no time provided)
                                  seekTo(pendingSeekRef.current ?? 0);
                                  pendingSeekRef.current = null;
                                }
                            } else {
                              // no per-faq video: use current video and seek if time provided
                                if (!isOpen && f.time != null) seekTo(f.time);
                            }
                          }}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-medium">{f.question}</span>
                      {typeof f.time === 'number' && (
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{formatTime(f.time)}</span>
                      )}
                    </div>
                    <span className="text-purple-600">{isOpen ? '▲' : '▼'}</span>
                  </button>

                  <div id={`faq-${f.id}`} className={`px-4 pb-4 transition-all ${isOpen ? 'block' : 'hidden'}`}>
                    <p className="text-gray-700 text-sm">{f.answer}</p>
                    {typeof f.time === 'number' && (
                      <div className="mt-2">
                        <button
                          onClick={() => seekTo(f.time)}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-600 text-white text-sm rounded-md"
                        >
                          Play from {formatTime(f.time)}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
