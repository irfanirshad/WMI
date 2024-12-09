import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] space-y-4">
      <h1 className="text-4xl font-bold">404 - Not Found</h1>
      <p className="text-muted-foreground text-center max-w-md">
        Sorry, we couldn't find what you were looking for. The page you requested may have been moved or deleted.
      </p>
      <Button asChild>
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  );
}