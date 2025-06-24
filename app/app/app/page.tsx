export default function Home() {
  return (
    <div className="container">
      <h1>ClipFlow</h1>
      <p>AI-powered video clip generator for TikTok, Instagram & YouTube</p>

      <div className="success-box">✅ ClipFlow is running successfully on Railway!</div>

      <div className="feature-grid">
        <div className="feature-card">
          <h3>🎬 AI Video Processing</h3>
          <p>Advanced AI analyzes your videos and creates perfect clips for each platform</p>
        </div>

        <div className="feature-card">
          <h3>📱 Multi-Platform</h3>
          <p>Generate clips optimized for TikTok (15s), Instagram (30s), and YouTube (60s)</p>
        </div>

        <div className="feature-card">
          <h3>⚡ Lightning Fast</h3>
          <p>Get your viral-ready clips in under 60 seconds with professional quality</p>
        </div>
      </div>
    </div>
  )
}
