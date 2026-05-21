"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { base_url } from "@/config";

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  link: string;
}

interface BlogProps {
  title?: string;
  itemsPerPage?: number;
  showNavigation?: boolean;
  className?: string;
}

// Helper function to format the date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function Blog({
  title = "Fasonly'de Neler Yeni?",
  itemsPerPage = 3,
  showNavigation = true,
  className = "",
}: BlogProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch blog posts from our API
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/blog");
        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to fetch blog posts");
        }

        // Transform the API data to match our BlogPost interface
        const transformedPosts: BlogPost[] = result.data.map(
          (article: any) => ({
            id: article.id,
            title: article.title,
            description: article.summary || "İçerik özeti bulunmamaktadır.",
            // Use base_url from config for the image
            image: `${base_url}/${article.thumbnail}`,
            // Using the article ID as a fallback for date since the API response doesn't include one
            date: formatDate(new Date().toISOString()),
            link: `/blog/${article.slug}`,
          }),
        );

        setPosts(transformedPosts);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError(
          "Makaleler yüklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= posts.length ? 0 : prevIndex + itemsPerPage,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? Math.max(0, posts.length - itemsPerPage)
        : prevIndex - itemsPerPage,
    );
  };

  const goToPage = (pageIndex: number) => {
    setCurrentIndex(pageIndex * itemsPerPage);
  };

  const visiblePosts = posts.slice(currentIndex, currentIndex + itemsPerPage);

  // Show loading state
  if (loading) {
    return (
      <div className={`w-full bg-white py-16 ${className}`}>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-[#96E92A] border-t-transparent rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className={`w-full bg-white py-16 ${className}`}>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="text-center py-12">
            <p className="text-red-500">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 text-[#0099ff] hover:text-[#96E92A] transition-colors">
              Tekrar Dene
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show empty state if no posts
  if (posts.length === 0) {
    return (
      <div className={`w-full bg-white py-16 ${className}`}>
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
              {title}
            </h2>
            <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
          </div>
          <div className="text-center py-12">
            <p className="text-gray-500">Henüz makale bulunmamaktadır.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full bg-white py-16 ${className}`}>
      <div className="container mx-auto px-4 md:px-10 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-4">
            {title}
          </h2>
          <div className="w-20 h-1 bg-[#96E92A] mx-auto rounded-full"></div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                {post.image ? (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      // Show fallback div
                      const parent = target.parentElement;
                      if (parent) {
                        const fallback = document.createElement("div");
                        fallback.className =
                          "w-full h-full bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] flex items-center justify-center";
                        fallback.innerHTML =
                          '<span class="text-gray-400 text-sm">Görsel</span>';
                        parent.appendChild(fallback);
                        target.style.display = "none";
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#F0F8FF] to-[#E6F3FF] flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Görsel</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {post.date && (
                  <span className="text-sm text-[#0099ff] font-medium mb-2">
                    {post.date}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#0B1221] mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>
                <Link
                  href={post.link}
                  className="flex items-center gap-2 text-[#0B1221] font-medium mt-auto hover:text-[#0099ff] transition-colors duration-300 group-hover:gap-3 w-fit">
                  Daha Fazla
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showNavigation && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F0F8FF] hover:border-[#0099ff] transition-all duration-300 group"
              aria-label="Önceki">
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#0099ff]" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / itemsPerPage) === idx
                      ? "w-6 bg-[#0099ff]"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Sayfa ${idx + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#F0F8FF] hover:border-[#0099ff] transition-all duration-300 group"
              aria-label="Sonraki">
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#0099ff]" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
