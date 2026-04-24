import React, { useState, useEffect, useRef } from 'react';
import './VideosPage.css';

function VideosPage() {
  const [videos, setVideos] = useState(() => {
    const saved = localStorage.getItem('uploadedVideos');
    return saved ? JSON.parse(saved) : [];
  });

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');

  const videoRefs = useRef([]);

  useEffect(() => {
    setVideos((prev) => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    localStorage.setItem('uploadedVideos', JSON.stringify(videos));
  }, [videos]);

  // Intersection Observer to auto-play/pause videos
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // start the video in view
          } else {
            video.pause(); // pause videos out of view
          }
        });
      },
      { threshold: 0.75 } // 75% of video should be visible to play
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [videos]);

  const handleAddVideoClick = () => setShowUploadModal(true);

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);

  const handleUpload = () => {
    if (!selectedFile) {
      alert('Please select a video file');
      return;
    }

    const newVideo = {
      id: Date.now(),
      url: URL.createObjectURL(selectedFile),
      title: videoTitle.trim() || 'Untitled Video'
    };

    setVideos((prev) => [newVideo, ...prev]);
    setSelectedFile(null);
    setVideoTitle('');
    setShowUploadModal(false);
  };

  return (
    <div className="videos-page">
      {/* Add Video Button */}
      <div className="add-video-button">
        <button onClick={handleAddVideoClick}>Add Video</button>
      </div>

      {/* Video List */}
      <div className="videos-container">
        {videos.map((video, index) => (
          <div key={video.id} className="video-section">
            <video
              className="tiktok-video"
              src={video.url}
              muted
              loop
              ref={(el) => (videoRefs.current[index] = el)}
              onClick={(e) => {
                const v = e.target;
                if (v.paused) v.play();
                else v.pause();
              }}
            ></video>
            <div className="video-info">{video.title}</div>
          </div>
        ))}
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Upload Video</h3>
            <input type="file" accept="video/*" onChange={handleFileChange} />
            <input
              type="text"
              placeholder="Video Title (optional)"
              value={videoTitle}
              onChange={(e) => setVideoTitle(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={() => setShowUploadModal(false)}>Cancel</button>
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideosPage;

