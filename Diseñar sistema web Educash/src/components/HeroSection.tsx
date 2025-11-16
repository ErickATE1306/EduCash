import { motion } from 'motion/react';
import { Wallet, TrendingUp, Shield, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated circles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#059669]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#059669]/10 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tight">
              <span className="inline-block bg-gradient-to-r from-[#059669] via-[#047857] to-[#059669] bg-clip-text text-transparent animate-pulse-green">
                EDU
              </span>
              <span className="inline-block text-[#059669] animate-glitch">
                CASH
              </span>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-[#047857] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tu asistente financiero inteligente para estudiantes universitarios. 
            Registra, analiza y optimiza tus finanzas con IA.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={onGetStarted}
              className="bg-[#059669] text-black hover:bg-[#047857] px-8 py-6 rounded-lg shadow-[0_0_20px_rgba(5,150,105,0.5)] hover:shadow-[0_0_30px_rgba(5,150,105,0.8)] transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="mr-2" />
              Comenzar Ahora
            </Button>
            <Button
              variant="outline"
              className="border-[#059669] text-[#059669] hover:bg-[#059669]/10 px-8 py-6 rounded-lg"
            >
              Ver Demo
            </Button>
          </motion.div>

          {/* Feature cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <FeatureCard
              icon={<Wallet />}
              title="Registro Fácil"
              description="Registra ingresos y gastos en segundos"
              delay={0.7}
            />
            <FeatureCard
              icon={<TrendingUp />}
              title="Análisis IA"
              description="Consejos personalizados según tus patrones"
              delay={0.8}
            />
            <FeatureCard
              icon={<Shield />}
              title="Para Estudiantes"
              description="Diseñado específicamente para universitarios"
              delay={0.9}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/20 to-transparent rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-black/80 backdrop-blur-sm border border-[#059669]/30 rounded-xl p-6 space-y-3 hover:border-[#059669] transition-all duration-300">
        <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center text-[#059669] group-hover:bg-[#059669] group-hover:text-black transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-[#059669]">{title}</h3>
        <p className="text-[#047857] text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
