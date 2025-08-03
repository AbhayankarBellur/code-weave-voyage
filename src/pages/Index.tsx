import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { BlogGrid } from "@/components/BlogGrid";
import { Categories } from "@/components/Categories";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Categories />
      <BlogGrid />
    </div>
  );
};

export default Index;
