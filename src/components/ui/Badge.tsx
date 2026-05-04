interface BadgeProps {
  /** Text label to display inside the badge */
  label: string;
  /** Visual variant controlling colour. Default: 'default' */
  variant?: 'default' | 'bright' | 'amber' | 'muted';
}

/** Maps badge variant names to Tailwind class strings */
const VARIANT_CLASSES: Record<BadgeProps['variant'] & string, string> = {
  default: 'border-terminal-dim  text-terminal-base',
  bright:  'border-terminal-base text-terminal-bright',
  amber:   'border-terminal-amber text-terminal-amber',
  muted:   'border-terminal-muted text-terminal-muted',
};

/**
 * Small bordered chip used to display tech tags, categories, or labels.
 *
 * @param label - Text shown inside the badge.
 * @param variant - Colour variant key. Defaults to 'default'.
 */
const Badge = ({ label, variant = 'default' }: BadgeProps): JSX.Element => (
  <span
    className={`inline-block border px-2 py-0.5 text-xs tracking-widest uppercase ${VARIANT_CLASSES[variant]}`}
  >
    {label}
  </span>
);

export default Badge;
