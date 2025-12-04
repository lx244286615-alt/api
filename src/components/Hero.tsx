import { motion } from "motion/react";
import { Search, Sparkles } from "lucide-react";
import { useState } from "react";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="relative pt-20 pb-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-yellow-300" />
          <span className="text-white/90">发现最优质的资源</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-white mb-6"
        >
          <span className="block text-6xl md:text-7xl lg:text-8xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
            海量资源
          </span>
          <span className="block text-4xl md:text-5xl text-white/80">
            尽在指尖
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl text-white/70 mb-12 max-w-2xl mx-auto"
        >
          精选全网优质资源，涵盖设计、开发、学习、工具等多个领域，让你的工作效率提升10倍
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
            <div className="relative flex items-center bg-white/10 backdrop-blur-md rounded-full border border-white/20 p-2">
              <Search className="w-6 h-6 text-white/60 ml-4" />
              <input
                type="text"
                placeholder="搜索你想要的资源..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-white/50 px-4 py-3"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-xl transition-all hover:scale-105">
                搜索
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
