import { motion } from "motion/react";
import { Star, TrendingUp, Clock, Users } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FeaturedResources() {
  const resources = [
    {
      title: "Figma 设计系统完整模板",
      category: "设计素材",
      rating: 4.9,
      downloads: 15200,
      image: "design template",
      trending: true,
    },
    {
      title: "React 组件库精选",
      category: "开发工具",
      rating: 4.8,
      downloads: 23400,
      image: "code development",
      trending: true,
    },
    {
      title: "AI 提示词完整指南",
      category: "在线学习",
      rating: 5.0,
      downloads: 31800,
      image: "artificial intelligence",
      trending: true,
    },
    {
      title: "高清图片素材库",
      category: "图片资源",
      rating: 4.7,
      downloads: 42100,
      image: "photography camera",
      trending: false,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl text-white mb-4">精选推荐</h2>
        <p className="text-xl text-white/70">最热门的优质资源</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all">
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <ImageWithFallback
                  src={`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=300&fit=crop`}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {resource.trending && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-orange-500 rounded-full">
                    <TrendingUp className="w-4 h-4 text-white" />
                    <span className="text-white">热门</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm">
                    {resource.category}
                  </span>
                </div>
                <h3 className="text-xl text-white mb-4">{resource.title}</h3>
                <div className="flex items-center justify-between text-white/70">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{resource.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{resource.downloads.toLocaleString()} 下载</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <button className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all hover:scale-105">
          探索更多资源
        </button>
      </motion.div>
    </div>
  );
}
