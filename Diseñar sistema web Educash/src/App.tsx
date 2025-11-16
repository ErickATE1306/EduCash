import { useState } from 'react';
import { MatrixBackground } from './components/MatrixBackground';
import { HeroSection } from './components/HeroSection';
import { FinanceDashboard } from './components/FinanceDashboard';
import { Navbar } from './components/Navbar';
import { Bot } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="size-full min-h-screen bg-black relative overflow-x-hidden">
      {/* Matrix Background Effect */}
      <MatrixBackground />
      
      {/* Navbar */}
      <Navbar onLogoClick={() => setShowDashboard(false)} />
      
      {/* Main Content */}
      <div className="pt-16">
        {showDashboard ? (
          <FinanceDashboard />
        ) : (
          <HeroSection onGetStarted={() => setShowDashboard(true)} />
        )}
      </div>

      {/* Floating AI Assistant Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-50 perspective-container"
        initial={{ scale: 0, rotateZ: -180 }}
        animate={{ 
          scale: 1, 
          rotateZ: 0,
        }}
        transition={{ delay: 1, type: "spring", bounce: 0.6 }}
        whileHover={{
          scale: 1.2,
          rotateY: 360,
          transition: { duration: 0.8 }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div 
          className="relative"
          animate={{
            translateY: [0, -10, 0],
            rotateZ: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0 bg-[#00ff88] rounded-full blur-xl opacity-50 animate-pulse-green" />
          <motion.button 
            className="relative w-14 h-14 bg-[#00ff88] rounded-full flex items-center justify-center text-black shadow-[0_0_40px_rgba(0,255,136,1)] hover:shadow-[0_0_60px_rgba(0,255,136,1)] transition-all duration-300"
            onClick={() => setShowDashboard(true)}
            whileTap={{ scale: 0.9, rotateZ: 180 }}
          >
            <motion.div
              animate={{
                rotateZ: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Bot className="h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
