import { motion } from 'motion/react';
import { Play, Sparkles, TrendingUp, Target, Brain, Zap, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    id: 1,
    icon: Brain,
    title: 'Asistente IA Inteligente',
    description: 'Analiza tus patrones de gasto y te da recomendaciones personalizadas',
    demo: 'Prueba haciendo una transacción y observa cómo la IA te da consejos',
    color: '#00ff88',
  },
  {
    id: 2,
    icon: TrendingUp,
    title: 'Dashboard en Tiempo Real',
    description: 'Visualiza tus finanzas con gráficos interactivos y estadísticas detalladas',
    demo: 'Los datos se actualizan instantáneamente con cada transacción',
    color: '#00cc66',
  },
  {
    id: 3,
    icon: Target,
    title: 'Metas de Ahorro',
    description: 'Define objetivos y monitorea tu progreso automáticamente',
    demo: 'Crea una meta y ve cómo EduCash te ayuda a alcanzarla',
    color: '#14f195',
  },
  {
    id: 4,
    icon: Zap,
    title: 'Registro Rápido',
    description: 'Añade transacciones en segundos con un formulario intuitivo',
    demo: 'Sistema optimizado para estudiantes ocupados',
    color: '#5fffc0',
  },
];

const steps = [
  {
    number: 1,
    title: 'Registra tus Transacciones',
    description: 'Añade ingresos y gastos de forma rápida y sencilla',
  },
  {
    number: 2,
    title: 'Analiza tus Patrones',
    description: 'El dashboard muestra gráficos y tendencias automáticamente',
  },
  {
    number: 3,
    title: 'Recibe Consejos IA',
    description: 'El asistente inteligente te da recomendaciones personalizadas',
  },
  {
    number: 4,
    title: 'Alcanza tus Metas',
    description: 'Mejora tus hábitos financieros paso a paso',
  },
];

const benefits = [
  '100% Gratis para Estudiantes',
  'Sin Publicidad ni Anuncios',
  'Datos Almacenados Localmente',
  'Interfaz Futurista y Moderna',
  'Animaciones 3D Espectaculares',
  'Actualizado Constantemente',
];

interface DemoPageProps {
  onStartDemo: () => void;
}

export function DemoPage({ onStartDemo }: DemoPageProps) {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-6"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,255,136,0.8)]">
              <Sparkles className="h-12 w-12 text-black" />
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-6xl text-[#00ff88] mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Modo Demo
          </motion.h1>
          
          <motion.p 
            className="text-[#00cc66] text-2xl mb-8 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Descubre todas las funcionalidades de EduCash sin necesidad de registro
          </motion.p>

          <motion.div
            initial={{ scale: 0, rotateZ: -180 }}
            animate={{ scale: 1, rotateZ: 0 }}
            transition={{ delay: 0.5, type: 'spring', bounce: 0.5 }}
          >
            <Button
              onClick={onStartDemo}
              className="bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_40px_rgba(0,255,136,0.8)] hover:shadow-[0_0_60px_rgba(0,255,136,1)] transition-all duration-300 px-8 py-6 text-lg"
            >
              <Play className="mr-2 h-6 w-6" />
              Iniciar Demo Interactivo
            </Button>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-3xl text-[#00ff88] text-center mb-8">Características Principales</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                className="perspective-container"
                initial={{ opacity: 0, y: 100, rotateX: -45 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.7 + index * 0.1,
                  duration: 0.6,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <motion.div
                  className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6 h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{
                    scale: 1.03,
                    rotateY: 5,
                    borderColor: feature.color,
                    boxShadow: `0 0 50px ${feature.color}80`,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ 
                        background: `linear-gradient(135deg, ${feature.color}40, ${feature.color}20)`,
                        border: `2px solid ${feature.color}60`
                      }}
                      animate={{
                        rotateY: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: index * 0.5
                      }}
                    >
                      <feature.icon className="h-7 w-7" style={{ color: feature.color }} />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl text-[#00ff88] mb-2">{feature.title}</h3>
                      <p className="text-[#00cc66] mb-3">{feature.description}</p>
                      <div className="bg-[#0a0e0a] border border-[#00ff88]/20 rounded-lg p-3">
                        <p className="text-[#00cc66] text-sm flex items-start gap-2">
                          <Sparkles className="h-4 w-4 text-[#00ff88] flex-shrink-0 mt-0.5" />
                          {feature.demo}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-3xl text-[#00ff88] text-center mb-8">¿Cómo Funciona?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative perspective-container"
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{
                  delay: 1.1 + index * 0.15,
                  type: 'spring',
                  stiffness: 100
                }}
              >
                <motion.div
                  className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6 h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    borderColor: 'rgba(0, 255, 136, 0.6)',
                    boxShadow: '0 0 40px rgba(0, 255, 136, 0.4)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Step Number */}
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.6)] mb-4 mx-auto"
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                  >
                    <span className="text-black text-2xl">{step.number}</span>
                  </motion.div>
                  
                  <h3 className="text-[#00ff88] text-xl mb-2 text-center">{step.title}</h3>
                  <p className="text-[#00cc66] text-center text-sm">{step.description}</p>
                </motion.div>

                {/* Arrow (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight className="h-6 w-6 text-[#00ff88]" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-gradient-to-br from-[#00ff88]/20 to-[#00cc66]/20 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-3xl p-8 md:p-12 perspective-container">
            <h2 className="text-3xl text-[#00ff88] text-center mb-8">¿Por Qué EduCash?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-3 p-4 bg-black/40 rounded-xl border border-[#00ff88]/20"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(0, 255, 136, 0.6)',
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-black" />
                  </div>
                  <span className="text-[#00ff88]">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-3xl p-12 perspective-container">
            <motion.div
              className="w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full mx-auto mb-6 flex items-center justify-center shadow-[0_0_60px_rgba(0,255,136,0.8)]"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <Sparkles className="h-10 w-10 text-black" />
            </motion.div>

            <h2 className="text-4xl text-[#00ff88] mb-4">¿Listo para Empezar?</h2>
            <p className="text-[#00cc66] text-xl mb-8 max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya están mejorando sus finanzas con EduCash
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={onStartDemo}
                  className="bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_40px_rgba(0,255,136,0.8)] hover:shadow-[0_0_60px_rgba(0,255,136,1)] px-8 py-6 text-lg"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Probar Demo Ahora
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="border-2 border-[#00ff88] text-[#00ff88] hover:bg-[#00ff88]/10 px-8 py-6 text-lg"
                >
                  <Sparkles className="mr-2 h-6 w-6" />
                  Crear Cuenta Gratis
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
