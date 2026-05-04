import { useEffect, useState } from 'react';

interface GlitchTextProps {
  /** The final resolved text to display after the glitch animation */
  text: string;
  /** Duration in ms for the full glitch-to-resolve animation. Default: 1500 */
  duration?: number;
  /** Tailwind classes to apply to the outer span */
  className?: string;
}

const GLITCH_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&';

/**
 * Returns a random character from the glitch character set.
 */
const randomChar = (): string =>
  GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];

/**
 * Animated text component that scrambles characters then resolves to the target string.
 * Mimics a Fallout terminal boot-sequence effect.
 *
 * @param text - The final string to display.
 * @param duration - Total animation duration in milliseconds.
 * @param className - Optional Tailwind classes for styling.
 */
const GlitchText = ({ text, duration = 1500, className = '' }: GlitchTextProps): JSX.Element => {
  const [displayed, setDisplayed] = useState<string>(
    () => text.split('').map(() => randomChar()).join(''),
  );

  useEffect(() => {
    const totalFrames = 20;
    const intervalMs = duration / totalFrames;
    let frame = 0;

    const interval = setInterval(() => {
      frame += 1;
      const resolved = Math.floor((frame / totalFrames) * text.length);

      setDisplayed(
        text
          .split('')
          .map((char, i) =>
            i < resolved ? char : char === ' ' ? ' ' : randomChar(),
          )
          .join(''),
      );

      if (frame >= totalFrames) clearInterval(interval);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [text, duration]);

  return <span className={className}>{displayed}</span>;
};

export default GlitchText;
