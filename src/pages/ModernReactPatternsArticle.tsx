import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/Navigation";
import { ArrowLeft, Calendar, Clock, User, Share2, BookmarkPlus, ThumbsUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import article1 from "@/assets/article-1.jpg";

export default function ModernReactPatternsArticle() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <div className="pt-20 pb-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-6 hover:bg-primary/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
          
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="default">React</Badge>
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">Performance</Badge>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Modern React Patterns: Hooks, Context, and Performance
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Explore advanced React patterns including custom hooks, context optimization, and performance best practices for large-scale applications.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>Sarah Chen</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>8 min read</span>
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-2" />
                Like
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <img 
            src={article1} 
            alt="Modern React Patterns"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none text-foreground">
            
            <p className="text-lg leading-relaxed mb-6">
              React has evolved significantly since its introduction, and with the advent of hooks, the way we write React applications has fundamentally changed. In this comprehensive guide, we'll explore modern React patterns that will help you build more maintainable, performant, and scalable applications.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Understanding Modern React Hooks</h2>
            
            <p className="mb-6">
              Hooks have revolutionized React development by allowing us to use state and lifecycle features in functional components. Let's dive into some advanced patterns that go beyond the basic useState and useEffect.
            </p>

            <div className="bg-code-bg border border-code-border rounded-lg p-6 mb-6">
              <pre className="text-sm text-foreground overflow-x-auto">
{`// Custom Hook for API Calls
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Context Optimization Strategies</h2>
            
            <p className="mb-6">
              While React Context is powerful, it can lead to performance issues when not used correctly. Here are some strategies to optimize your context usage:
            </p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Split contexts by concern to minimize re-renders</li>
              <li>Use useMemo to prevent unnecessary object recreation</li>
              <li>Implement context selectors for fine-grained subscriptions</li>
              <li>Consider using useReducer for complex state logic</li>
            </ul>

            <div className="bg-code-bg border border-code-border rounded-lg p-6 mb-6">
              <pre className="text-sm text-foreground overflow-x-auto">
{`// Optimized Context Pattern
const UserContext = createContext();
const UserDispatchContext = createContext();

function UserProvider({ children }) {
  const [user, dispatch] = useReducer(userReducer, initialState);
  
  const memoizedUser = useMemo(() => user, [user]);
  
  return (
    <UserContext.Provider value={memoizedUser}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}`}
              </pre>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6 text-foreground">Performance Best Practices</h2>
            
            <p className="mb-6">
              Performance optimization in React isn't just about using React.memo. Here are comprehensive strategies for building high-performance React applications:
            </p>

            <div className="bg-muted/50 border-l-4 border-primary p-6 mb-6">
              <h3 className="font-semibold mb-2 text-foreground">Pro Tip:</h3>
              <p className="text-muted-foreground">
                Always profile your application before optimizing. Use React DevTools Profiler to identify actual performance bottlenecks rather than optimizing prematurely.
              </p>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">1. Component Memoization</h3>
            <p className="mb-6">
              Use React.memo for expensive components that receive the same props frequently. Combine with useCallback and useMemo for complete optimization.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">2. Code Splitting</h3>
            <p className="mb-6">
              Implement route-based and component-based code splitting using React.lazy and Suspense to reduce initial bundle sizes.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4 text-foreground">3. Virtual Scrolling</h3>
            <p className="mb-6">
              For large lists, implement virtual scrolling to render only visible items, significantly improving performance with thousands of items.
            </p>

            <Separator className="my-12" />

            <h2 className="text-2xl font-bold mb-6 text-foreground">Conclusion</h2>
            
            <p className="mb-6">
              Modern React development is about choosing the right patterns for your specific use case. Whether you're building a small application or a large-scale enterprise system, understanding these patterns will help you make informed decisions about your React architecture.
            </p>

            <p className="text-lg font-medium">
              Remember: the best pattern is the one that solves your specific problem while keeping your code maintainable and performant.
            </p>

            <div className="bg-muted/30 rounded-lg p-6 mt-12">
              <h3 className="text-lg font-semibold mb-4 text-foreground">What's Next?</h3>
              <p className="text-muted-foreground mb-4">
                In our next article, we'll dive deeper into React Server Components and how they're changing the React landscape.
              </p>
              <Button variant="default">
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}