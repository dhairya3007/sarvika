import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

export default function Preloader({ 
  preloaderUrl = '/12-beacon-pipeline (2).svg', 
  logoUrl = '/logosarvika.png',
  onFinish
}) {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    // Lock background scrolling completely while preloader is active
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalTouchAction = document.body.style.touchAction;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';

    // Prevent wheel, touchmove, and keyboard scrolling on background
    const preventScroll = (e) => {
      if (e.type === 'keydown') {
        if ([32, 33, 34, 35, 36, 37, 38, 39, 40].includes(e.keyCode)) {
          e.preventDefault();
        }
        return;
      }
      e.preventDefault();
    };

    window.addEventListener('wheel', preventScroll, { passive: false });
    window.addEventListener('touchmove', preventScroll, { passive: false });
    window.addEventListener('keydown', preventScroll, { passive: false });
    window.scrollTo(0, 0);

    const unlockScroll = () => {
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.touchAction = originalTouchAction;
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScroll);
      window.scrollTo(0, 0);
    };

    // 12-beacon-pipeline SVG keyframe cycle runs for 8.6 seconds total.
    // Start fading out the preloader overlay right as SVG completes and trigger diagram animation
    const fadeTimer = setTimeout(() => {
      setFading(true);
      if (onFinishRef.current) onFinishRef.current();
    }, 8400);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      unlockScroll();
    }, 9200);

    return () => {
      unlockScroll();
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`preloader-page-overlay ${fading ? 'preloader-page-fade-out' : ''}`} 
      aria-label="SARVIKA Loading Screen"
      role="dialog"
      aria-modal="true"
    >
      {/* Full-screen SVG Preloaded Page (Exact authentic asset) */}
      <div className="preloader-svg-full-wrap">
        <object 
          type="image/svg+xml" 
          data={preloaderUrl} 
          className="preloader-fullscreen-svg"
          aria-label="SARVIKA preloader animation"
        >
          <img src={logoUrl} alt="SARVIKA Logo" className="preloader-fallback-img" />
        </object>
      </div>
    </div>
  );
}

