import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddVideoPage.css';

export default function AddVideoPage({ addVideoToFeed }) {
  const [videoFile, setVideoFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setVideoFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!videoFile) return alert('Please select a video.');

    const newVideo = {
      id: Date.now(),
      src: previewURL,
      username: 'current_user',
      caption: caption,
      likes: 0,
      comments: 0,
    };

    addVideoToFeed(newVideo);
    navigate('/videos');
  };

  return (
    <div className="upload-container">
      <h2>Upload a Video</h2>

      <form onSubmit={handleSubmit} className="upload-form">
        <label>
          Select Video:
          <input type="file" accept="video/*" onChange={handleVideoUpload} />
        </label>

        {previewURL && <video src={previewURL} controls className="video-preview" />}

        <label>
          Caption:
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Add a caption..."
          />
        </label>

        <button type="submit">Upload Video</button>
      </form>
    </div>
  );
}