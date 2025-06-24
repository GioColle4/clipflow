"use client"

import type React from "react"
import { useState, useRef } from "react"

export default function Home() {
  const [file, setFile] = useState<File | null>(null)
  const [processing, setProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [results, setResults] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (selectedFile: File) => {
    if (selectedFile && selectedFile.type.startsWith("video/")) {
      setFile(selectedFile)
      setResults(null)
    } else {
      alert("Please select a video file")
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) {
      handleFileSelect(droppedFile)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const processVideo = async () => {
    if (!file) return

    setProcessing(true)
    setProgress(0)

    // Simulate processing with progress
    const intervals = [10, 25, 40, 60, 80, 95, 100]

    for (let i = 0; i < intervals.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setProgress(intervals[i])
    }

    // Simulate results
    setResults({
      tiktok: {
        duration: "15s",
        size: "2.1 MB",
        quality: "1080p",
        url: "#",
      },
      instagram: {
        duration: "30s",
        size: "4.3 MB",
        quality: "1080p",
        url: "#",
      },
      youtube: {
        duration: "60s",
        size: "8.7 MB",
        quality: "1080p",
        url: "#",
      },
    })

    setProcessing(false)
  }

  return (
    <div className="container">
      <h1>ClipFlow</h1>
      <p>AI-powered video clip generator for TikTok, Instagram & YouTube</p>

      <div
        className={`upload-area ${file ? "has-file" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="video/*"
          style={{ display: "none" }}
          onChange={(e) => {
            const selectedFile = e.target.files?.[0]
            if (selectedFile) handleFileSelect(selectedFile)
          }}
        />

        {file ? (
          <div>
            <h3>📹 {file.name}</h3>
            <p>Size: {(file.size / 1024 / 1024).toFixed(1)} MB</p>
            <p>Ready to process!</p>
          </div>
        ) : (
          <div>
            <h3>📤 Drop your video here</h3>
            <p>Or click to select a file</p>
            <p>Supports MP4, MOV, AVI</p>
          </div>
        )}
      </div>

      {file && !processing && !results && (
        <button className="btn" onClick={processVideo}>
          🚀 Generate Clips with AI
        </button>
      )}

      {processing && (
        <div>
          <h3>🧠 AI Processing Your Video...</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p>{progress}% Complete</p>
        </div>
      )}

      {results && (
        <div className="results-grid">
          <div className="result-card">
            <h3>📱 TikTok</h3>
            <div className="video-preview">
              <span>9:16 Vertical Video</span>
            </div>
            <p>Duration: {results.tiktok.duration}</p>
            <p>Size: {results.tiktok.size}</p>
            <p>Quality: {results.tiktok.quality}</p>
            <button className="btn" style={{ marginTop: "1rem", width: "100%" }}>
              📥 Download TikTok Clip
            </button>
          </div>

          <div className="result-card">
            <h3>📷 Instagram Reels</h3>
            <div className="video-preview">
              <span>9:16 Vertical Video</span>
            </div>
            <p>Duration: {results.instagram.duration}</p>
            <p>Size: {results.instagram.size}</p>
            <p>Quality: {results.instagram.quality}</p>
            <button className="btn" style={{ marginTop: "1rem", width: "100%" }}>
              📥 Download Instagram Clip
            </button>
          </div>

          <div className="result-card">
            <h3>📺 YouTube Shorts</h3>
            <div className="video-preview">
              <span>9:16 Vertical Video</span>
            </div>
            <p>Duration: {results.youtube.duration}</p>
            <p>Size: {results.youtube.size}</p>
            <p>Quality: {results.youtube.quality}</p>
            <button className="btn" style={{ marginTop: "1rem", width: "100%" }}>
              📥 Download YouTube Clip
            </button>
          </div>
        </div>
      )}

      {results && (
        <div style={{ marginTop: "2rem" }}>
          <button
            className="btn"
            onClick={() => {
              setFile(null)
              setResults(null)
              setProgress(0)
            }}
          >
            🔄 Process Another Video
          </button>
        </div>
      )}
    </div>
  )
}
