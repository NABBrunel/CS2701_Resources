import React, { useEffect, useRef } from 'react';
import './VideosPage.css';

function VideosPage({ videos }) {
  const videoRefs = useRef([]);

  // Auto play/pause scrolling videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) v.play();
          else v.pause();
        });
      },
      { threshold: 0.75 }
    );

    videoRefs.current.forEach((v) => v && observer.observe(v));

    return () => {
      videoRefs.current.forEach((v) => v && observer.unobserve(v));
    };
  }, [videos]);

  return (
    <div className="videos-page">
      <div className="videos-container">
        {videos.length === 0 && (
          <p style={{ textAlign: 'center', paddingTop: 30 }}>
            No videos uploaded yet.
          </p>
        )}

        {videos.map((video, index) => (
          <div key={video.id} className="video-section">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              className="tiktok-video"
              src={video.src}
              loop
              muted
            />
            <div className="video-info">
              <h3>@{video.username}</h3>
              <p>{video.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideosPage;
