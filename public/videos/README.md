Place doctor-related videos here (MP4 recommended).

- Filename used by default in the code: `/videos/dr-field-intro.mp4`
- Use H.264 MP4 for best browser compatibility.
- Optional captions: add a WebVTT file with the same basename, e.g. `/videos/dr-field-intro.vtt` and uncomment the <track> line in `DoctorVideoFAQ.tsx`.

If you upload a different file name, update the `videoSrc` prop passed to `DoctorVideoFAQ` in `src/pages/DoctorProfile.tsx`.

If you want each FAQ to play a different video, upload additional MP4 files here and reference them in the FAQ entries as `videoSrc: '/videos/your-file.mp4'`. Example filenames used in the demo: `/videos/implants.mp4`, `/videos/crowns.mp4`, `/videos/pediatrics.mp4`.
