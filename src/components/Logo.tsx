import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-4xl md:text-5xl',
};

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-0 ${className}`}>
      <span className={`font-bold text-accent-900 ${sizes[size]}`}>מקסיט</span><span className={`font-bold text-primary-500 ${sizes[size]}`}>.</span><span className={`font-bold text-accent-400 ${sizes[size]}`}>Maxit</span>
    </Link>
  );
}
