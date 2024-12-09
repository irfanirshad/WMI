import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { GalleryHeader } from '@/components/gallery/gallery-header';

export const metadata = {
  title: 'Gallery | Al Watad Medical Est.',
  description: 'View our collection of medical equipment and industrial products in action.',
};

export default function GalleryPage() {
  return (
    <div className="container py-8 space-y-8">
      <GalleryHeader />
      <GalleryGrid />
    </div>
  );
}