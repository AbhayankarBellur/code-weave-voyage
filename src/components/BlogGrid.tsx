import { BlogCard } from "./BlogCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";
import article5 from "@/assets/article-5.jpg";
import article6 from "@/assets/article-6.jpg";

const mockPosts = [
  {
    id: "1",
    title: "Modern React Patterns: Hooks, Context, and Performance",
    description: "Explore advanced React patterns including custom hooks, context optimization, and performance best practices for large-scale applications.",
    author: "Sarah Chen",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Performance"],
    image: article1,
  },
  {
    id: "2",
    title: "TypeScript Advanced Types: Beyond the Basics",
    description: "Dive deep into TypeScript's advanced type system including mapped types, conditional types, and template literal types.",
    author: "Alex Rodriguez",
    date: "Dec 12, 2024",
    readTime: "12 min read",
    tags: ["TypeScript", "Types", "Advanced"],
    image: article2,
  },
  {
    id: "3",
    title: "CSS Grid vs Flexbox: When to Use What",
    description: "A comprehensive guide to choosing between CSS Grid and Flexbox for different layout scenarios with practical examples.",
    author: "Maya Patel",
    date: "Dec 10, 2024",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Design"],
    image: article3,
  },
  {
    id: "4",
    title: "Building Scalable APIs with Node.js and Express",
    description: "Learn how to design and build robust, scalable REST APIs using Node.js, Express, and modern development patterns.",
    author: "David Kim",
    date: "Dec 8, 2024",
    readTime: "15 min read",
    tags: ["Node.js", "API", "Backend"],
    image: article4,
  },
  {
    id: "5",
    title: "Responsive Design in 2024: Mobile-First Strategies",
    description: "Master responsive web design with modern CSS techniques, breakpoints, and mobile-first development approaches.",
    author: "Lisa Wang",
    date: "Dec 5, 2024",
    readTime: "10 min read",
    tags: ["CSS", "Responsive", "Mobile"],
    image: article5,
  },
  {
    id: "6",
    title: "GraphQL vs REST: Making the Right Choice",
    description: "Compare GraphQL and REST APIs, understand their strengths and weaknesses, and learn when to use each approach.",
    author: "James Thompson",
    date: "Dec 3, 2024",
    readTime: "9 min read",
    tags: ["GraphQL", "REST", "API"],
    image: article6,
  },
];

const allTags = Array.from(new Set(mockPosts.flatMap(post => post.tags)));

export const BlogGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => post.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tutorials, and insights in web development
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Tag Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filter by topic:</span>
            </div>
            {allTags.map(tag => (
              <Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Badge>
            ))}
            {selectedTags.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTags([])}
                className="text-xs"
              >
                Clear filters
              </Button>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  );
};