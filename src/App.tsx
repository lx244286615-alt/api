import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Categories } from "./components/Categories";
import { FeaturedResources } from "./components/FeaturedResources";
import { FloatingElements } from "./components/FloatingElements";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <FloatingElements />
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Categories />
        <FeaturedResources />
      </div>
    </div>
  );
}
