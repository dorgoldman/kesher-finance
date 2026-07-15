import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'dark' | 'light';
}

const sizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl md:text-5xl',
};

export default function Logo({ size = 'md', className = '', variant = 'dark' }: LogoProps) {
  const textColor = variant === 'light' ? 'text-white' : 'text-accent-900';
  const dotColor = variant === 'light' ? 'text-footer-accent' : 'text-primary-500';

  return (
    <Link href="/" className={`group inline-flex items-center gap-0 ${className}`}>
      <span className={`font-extrabold ${textColor} ${sizes[size]}`} style={{ letterSpacing: '-0.5px' }}>מקסיט</span>
      <span className={`font-extrabold ${dotColor} ${sizes[size]}`}>.</span>
    </Link>
  );
}
