import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onLoaded?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onLoaded }) => {
  const alreadyShown =
    typeof window !== 'undefined' && window.sessionStorage.getItem('sj_preloader_done') === '1';
  const [percent, setPercent] = useState(alreadyShown ? 100 : 0);
  const [hidden, setHidden] = useState(alreadyShown);

  useEffect(() => {
    if (alreadyShown) {
      onLoaded?.();
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setPercent(100);
        window.sessionStorage.setItem('sj_preloader_done', '1');
        setTimeout(() => {
          setHidden(true);
          onLoaded?.();
        }, 220);
      } else {
        setPercent(current);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [alreadyShown, onLoaded]);

  if (hidden) return null;

  const letters = [
    { char: 'S', isGrad: false },
    { char: 'A', isGrad: false },
    { char: 'H', isGrad: false },
    { char: 'I', isGrad: false },
    { char: 'L', isGrad: false },
    { char: '\u00A0', isGrad: false, isSpace: true },
    { char: 'J', isGrad: true },
    { char: 'A', isGrad: true },
    { char: 'I', isGrad: true },
    { char: 'N', isGrad: true },
  ];

  return (
    <div id="preloader" className={percent === 100 ? 'hidden' : ''} aria-hidden="true">
      <div className="preloader-content">
        <div className="preloader-name">
          {letters.map((l, i) => (
            <span
              key={i}
              className={`p-letter ${l.isSpace ? 'p-space' : ''} ${l.isGrad ? 'p-grad' : ''}`}
              style={{ ['--i' as string]: i } as React.CSSProperties}
            >
              {l.char}
            </span>
          ))}
        </div>
        <div className="preloader-bar">
          <div
            className="preloader-fill"
            id="preloader-fill"
            style={{ width: `${percent}%`, transition: 'width 0.1s ease-out' }}
          />
        </div>
      </div>
    </div>
  );
};
