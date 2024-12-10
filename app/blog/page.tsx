import { BlogList } from '@/components/blog/blog-list';
// import { BlogHeader } from '@/components/blog/blog-header';

export const metadata = {
  title: 'Blog | Al Watad Medical Est.',
  description: 'Stay updated with the latest insights in medical equipment and industrial solutions.',
};

export default function BlogPage() {
  return (
    <div className="container py-8 space-y-8">
      {/* <BlogHeader /> */}
      <BlogList />
    </div>
  );
}