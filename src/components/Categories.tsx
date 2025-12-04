import { motion } from "motion/react";
import { Palette, Code, BookOpen, Wrench, Image, Music, Video, Laptop } from "lucide-react";

export function Categories() {
  const categories = [
    { name: "设计素材", icon: Palette, color: "from-pink-500 to-rose-500", count: 8500 },
    { name: "开发工具", icon: Code, color: "from-blue-500 to-cyan-500", count: 6200 },
    { name: "在线学习", icon: BookOpen, color: "from-purple-500 to-indigo-500", count: 4800 },
    { name: "效率工具", icon: Wrench, color: "from-orange-500 to-amber-500", count: 7100 },
    { name: "图片资源", icon: Image, color: "from-green-500 to-emerald-500", count: 9300 },
    { name: "音频资源", icon: Music, color: "from-violet-500 to-purple-500", count: 3600 },
    { name: "视频资源", icon: Video, color: "from-red-500 to-pink-500", count: 5400 },
    { name: "软件应用", icon: Laptop, color: "from-teal-500 to-cyan-500", count: 4900 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl text-white mb-4">资源分类</h2>
        <p className="text-xl text-white/70">探索各个领域的精选资源</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white mb-2">{category.name}</h3>
                <p className="text-white/60">{category.count.toLocaleString()} 资源</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
