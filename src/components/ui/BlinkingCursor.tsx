/**
 * Renders an animated blinking underscore cursor.
 * Uses the `animate-blink` keyframe defined in tailwind.config.ts.
 */
const BlinkingCursor = (): JSX.Element => (
  <span className="animate-blink text-terminal-bright" aria-hidden="true">_</span>
);

export default BlinkingCursor;
