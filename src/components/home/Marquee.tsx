import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MarqueeItem {
  href: string;
  label: string;
}

interface MarqueeProps {
  items: MarqueeItem[];
  className?: string;
}

const Marquee = ({ items, className }: MarqueeProps) => {
  const marqueeItems = [...items, ...items]; // Duplicate for seamless loop

  return (
    <div className={cn("w-full overflow-x-hidden", className)}>
      <div className="flex animate-marquee whitespace-nowrap">
        {marqueeItems.map((item, index) => (
          <Link 
            key={`${item.href}-${index}`} 
            href={item.href} 
            className="mx-6 text-md font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
