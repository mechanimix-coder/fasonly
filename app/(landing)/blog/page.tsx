"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { base_url } from "@/config";

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

interface ApiResponse {
  data: BlogPost[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [meta, setMeta] = useState<ApiResponse["meta"] | null>(null);

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://fasonly-website-api-main-pk27te.laravel.cloud/api/articles?page=${currentPage}`,
      );
      const data: ApiResponse = await response.json();
      setPosts(data.data);
      setMeta(data.meta);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (id: number) => {
    const dates = [
      "May 15, 2025",
      "May 10, 2025",
      "May 5, 2025",
      "April 28, 2025",
      "April 20, 2025",
    ];
    return dates[id % dates.length];
  };

  const getCategory = (title: string) => {
    if (title.toLowerCase().includes("react"))
      return {
        name: "React",
        color: "bg-blue-50 text-blue-700 border-blue-200",
      };
    if (
      title.toLowerCase().includes("ai") ||
      title.toLowerCase().includes("gemma")
    )
      return {
        name: "AI & ML",
        color: "bg-purple-50 text-purple-700 border-purple-200",
      };
    if (title.toLowerCase().includes("developer"))
      return {
        name: "Career",
        color: "bg-green-50 text-green-700 border-green-200",
      };
    return {
      name: "Development",
      color: "bg-gray-50 text-gray-700 border-gray-200",
    };
  };

  const getImageUrl = (path: string) => {
    return `${base_url}${path}`;
  };

  const featuredPost = posts[0];
  const restPosts = posts.slice(1);

  // Loading Skeleton
  if (loading && posts.length === 0) {
    return (
      <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Hero Section Skeleton */}
        <div className="relative bg-[#0B1221] pt-10 overflow-hidden">
          <div className="container mx-auto px-4 md:px-10 lg:px-20 py-20 lg:py-28">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
                <div className="w-2 h-2 bg-[#96E92A]/50 rounded-full"></div>
                <div className="h-4 w-24 bg-white/20 rounded"></div>
              </div>
              <div className="h-16 md:h-20 bg-white/10 rounded-2xl max-w-2xl mx-auto mb-4"></div>
              <div className="h-6 bg-white/10 rounded-lg max-w-md mx-auto mb-2"></div>
              <div className="h-6 bg-white/10 rounded-lg max-w-lg mx-auto"></div>
              <div className="w-24 h-1 bg-white/20 mx-auto rounded-full mt-8"></div>
            </div>
          </div>
        </div>

        {/* Featured Post Skeleton */}
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-16  lg:py-20">
          <div className="rounded-3xl overflow-hidden bg-white shadow-xl mb-20">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-3/5 h-80 lg:h-[450px] bg-gray-200 animate-pulse"></div>
              <div className="flex-1 p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </div>
                <div className="h-8 bg-gray-200 rounded-lg w-3/4 mb-4"></div>
                <div className="h-8 bg-gray-200 rounded-lg w-2/3 mb-5"></div>
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-11/12"></div>
                  <div className="h-4 bg-gray-200 rounded w-10/12"></div>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                    <div>
                      <div className="h-4 w-20 bg-gray-200 rounded mb-1"></div>
                      <div className="h-3 w-24 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Posts Header Skeleton */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="h-10 w-48 bg-gray-200 rounded mb-3"></div>
              <div className="h-5 w-64 bg-gray-200 rounded"></div>
            </div>
          </div>

          {/* Posts Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white rounded-2xl overflow-hidden shadow-lg">
                <div className="h-64 bg-gray-200 animate-pulse"></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-4 w-20 bg-gray-200 rounded"></div>
                    <div className="h-4 w-24 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-11/12 mb-4"></div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-200"></div>
                      <div className="h-3 w-16 bg-gray-200 rounded"></div>
                    </div>
                    <div className="h-4 w-12 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#0B1221]  pt-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0099ff] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#96E92A] rounded-full filter blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-20 lg:py-28 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-[#96E92A] rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">
                Blog & Resources
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              The Upload
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Your blog feed for digital manufacturing resources, in-depth
              features, and industry news.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#0099ff] to-[#96E92A] mx-auto rounded-full mt-8"></div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-16 lg:py-20">
        {/* Featured Post - Fixed Image Height */}
        {featuredPost && (
          <Link
            href={`/blog/${featuredPost.slug}`}
            className="group block mb-20">
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col lg:flex-row">
                {/* Featured Image - Now covers full height */}
                <div className="relative lg:w-3/5 h-80 lg:h-auto lg:min-h-[450px] overflow-hidden">
                  <Image
                    src={getImageUrl(
                      featuredPost.backdrop_image || featuredPost.thumbnail,
                    )}
                    alt={featuredPost.title}
                    unoptimized
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center bg-white">
                  <div className="flex items-center gap-3 mb-4 flex-wrap">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold border ${getCategory(featuredPost.title).color}`}>
                      {getCategory(featuredPost.title).name}
                    </span>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-xs text-gray-500">
                        {formatDate(featuredPost.id)}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs text-gray-500">5 min read</span>
                    </div>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-[#0B1221] mb-5 leading-tight group-hover:text-[#0099ff] transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6 text-base line-clamp-3">
                    {featuredPost.summary}
                  </p>
                  <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0099ff] to-[#96E92A] flex items-center justify-center text-white font-bold text-sm">
                        F
                      </div>
                      <div>
                        <p className="font-medium text-[#0B1221] text-sm">
                          Fasonly
                        </p>
                        <p className="text-gray-400 text-xs">Content Team</p>
                      </div>
                    </div>
                    <span className="text-[#0099ff] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Latest Posts Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0B1221] mb-3">
              Latest Stories
            </h2>
            <p className="text-gray-500">Discover insights from our experts</p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-8"></div>
        </div>

        {/* Posts Grid */}
        {restPosts.length > 0 ? (
          <div className="grid grid-cols-1 pb-26 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={getImageUrl(post.thumbnail)}
                    alt={post.title}
                    unoptimized
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${getCategory(post.title).color}`}>
                      {getCategory(post.title).name}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      <span className="text-gray-500">
                        {formatDate(post.id)}
                      </span>
                    </div>
                    <span className="text-gray-300">•</span>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-gray-500">4 min read</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1221] mb-3 line-clamp-2 group-hover:text-[#0099ff] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0099ff] to-[#96E92A] flex items-center justify-center text-white font-bold text-xs">
                        F
                      </div>
                      <span className="text-gray-600 text-xs font-medium">
                        Fasonly
                      </span>
                    </div>
                    <span className="text-[#0099ff] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                      Read
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-[#0099ff]/20 transition-all duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-3xl">
            <p className="text-gray-500 text-lg">No more articles found.</p>
          </div>
        )}

        {/* Modern Pagination */}
        {meta && meta.last_page > 1 && (
          <div className="flex justify-center items-center gap-3 mt-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-[#0099ff] hover:text-white hover:border-[#0099ff]"
              }`}>
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.min(5, meta.last_page) }, (_, i) => {
                let pageNum;
                if (meta.last_page <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= meta.last_page - 2) {
                  pageNum = meta.last_page - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all duration-300 ${
                      currentPage === pageNum
                        ? "bg-[#0099ff] text-white shadow-lg shadow-[#0099ff]/25"
                        : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                    }`}>
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(meta.last_page, prev + 1))
              }
              disabled={currentPage === meta.last_page}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                currentPage === meta.last_page
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-[#0099ff] hover:text-white hover:border-[#0099ff]"
              }`}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
