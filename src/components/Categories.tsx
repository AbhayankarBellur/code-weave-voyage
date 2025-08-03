import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Smartphone, 
  Zap,
  Brain,
  Shield
} from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, Vue, Angular, and modern JavaScript frameworks",
    count: 45,
    color: "text-blue-500"
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, databases, and server-side technologies",
    count: 32,
    color: "text-green-500"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design systems, user experience, and interface design",
    count: 28,
    color: "text-purple-500"
  },
  {
    icon: Globe,
    title: "Web Performance",
    description: "Optimization, Core Web Vitals, and speed improvements",
    count: 22,
    color: "text-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "React Native, Flutter, and mobile-first approaches",
    count: 18,
    color: "text-pink-500"
  },
  {
    icon: Shield,
    title: "Web Security",
    description: "Authentication, authorization, and security best practices",
    count: 15,
    color: "text-red-500"
  },
  {
    icon: Brain,
    title: "Algorithms & Data Structures",
    description: "Problem solving, coding interviews, and computer science",
    count: 25,
    color: "text-indigo-500"
  },
  {
    icon: Zap,
    title: "DevOps & Tools",
    description: "CI/CD, deployment, testing, and development tools",
    count: 20,
    color: "text-yellow-500"
  }
];

export const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Topics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Dive into specific areas of web development and coding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border-border hover:border-primary/50"
              >
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:scale-110 transition-transform">
                    <IconComponent className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <div className="text-sm font-semibold text-primary">
                    {category.count} articles
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};