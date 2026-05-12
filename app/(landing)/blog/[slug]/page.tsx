import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  thumbnail: string;
  backdrop_image: string;
  summary: string;
  content: string | null;
  is_draft: boolean;
}

// API base URL
const API_URL = "https://fasonly-website-api-main-pk27te.laravel.cloud";

// Fetch all articles to find the ID by slug
async function findPostIdBySlug(slug: string): Promise<number | null> {
  try {
    const response = await fetch(`${API_URL}/api/articles?per_page=100`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = await response.json();

    // Search for the post with matching slug
    const post = data.data.find((post: BlogPost) => post.slug === slug);
    return post ? post.id : null;
  } catch (error) {
    console.error("Error fetching posts list:", error);
    return null;
  }
}

// Fetch a single blog post by ID
async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_URL}/api/articles/${id}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.data || data;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate static params for all posts
export async function generateStaticParams() {
  const response = await fetch(`${API_URL}/api/articles`);
  const data = await response.json();

  return data.data.map((post: BlogPost) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Step 1: Find the post ID using the slug from the URL
  const postId = await findPostIdBySlug(slug);

  if (!postId) {
    notFound();
  }

  // Step 2: Fetch the full post data using the ID
  const post = await getBlogPostById(postId);

  if (!post) {
    notFound();
  }

  const getImageUrl = (path: string) => {
    return `${API_URL}/${path}`;
  };

  return (
    <div className="w-full bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 md:px-10 lg:px-20 max-w-4xl">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-[#0099ff] mb-8 transition-colors">
          ← Back to Blog
        </Link>

        {/* Hero Image */}
        <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={getImageUrl(post.backdrop_image || post.thumbnail)}
            alt={post.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B1221] mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Summary as excerpt */}
        <div className="text-lg text-gray-600 border-l-4 border-[#0099ff] pl-6 italic mb-8">
          {post.summary}
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          {post.content ? (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          ) : (
            <p className="text-gray-500 italic">
              Full content is being prepared. Please check back soon!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
