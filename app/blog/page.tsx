"use client";

import Navbar from "@/components/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { blog } from "../../components/blogData";

export default function BlogPage() {
  return (
    <div className="min-h-screen text-[#F1F0EA] font-mono relative">
      {/* Background */}
      <div className="modern-bg">
        <div className="base-gradient"></div>
        <div className="radial-mesh"></div>
        <div className="elemental-texture"></div>
        <div className="dot-matrix"></div>
        <div className="accent-elements">
          <div className="accent-element"></div>
          <div className="accent-element"></div>
          <div className="accent-element"></div>
        </div>
        <div className="noise-overlay"></div>
      </div>

      {/* Content layer */}
      <div className="content-layer">
        <Navbar />
        <main className="pt-20 font-mono sm:pt-24">
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#00A6ED] font-mono">
                My Blog
              </h1>
              <p className="text-xs sm:text-lg lg:text-xl text-[#F1F0EA]/80 font-mono px-4">
                Thoughts, tutorials, and insights on software development
              </p>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-6 sm:gap-6 lg:gap-8">
              {blog.map((post) => (
                <Card
                  key={post.id}
                  className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40 group cursor-pointer"
                  onClick={() => window.open(post.url, "_blank")}
                >
                  <CardContent className="p-4 sm:p-6">
                    {/* Cover Image */}
                    {post.social_image && (
                      <div className="mb-4 sm:mb-6 overflow-hidden rounded-lg">
                        <img
                          src={post.social_image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-40 sm:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}

                    {/* Title */}
                    <h2 className="text-sm sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 text-[#00A6ED] group-hover:text-[#00A6ED]/80 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="text-[#F1F0EA]/70 mb-4 sm:mb-6 text-xs sm:text-base line-clamp-3">
                      {post.description}
                    </p>

                    {/* Tags */}
                    {post.tag_list && post.tag_list.length > 0 && (
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                        {post.tag_list.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-[#00A6ED]/10 text-[#00A6ED] rounded-full text-xs sm:text-sm font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Meta Information */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 text-xs sm:text-sm text-[#F1F0EA]/60">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{post.readable_publish_date}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{post.reading_time_minutes} min read</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 text-[#00A6ED] group-hover:text-[#00A6ED]/80 transition-colors">
                        <span>Read more</span>
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                      </div>
                    </div>

                    {/* Author Info */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-[#00A6ED]/20">
                      <img
                        src={post.user.profile_image_90 || "/placeholder.svg"}
                        alt={post.user.name}
                        className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                      />
                      <div>
                        <p className="text-[#F1F0EA] font-medium text-sm sm:text-base">
                          {post.user.name}
                        </p>
                        <p className="text-[#F1F0EA]/60 text-xs sm:text-sm">
                          @{post.user.username}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
