import { motion } from 'motion/react';
import { BookOpen, Clock, Star, TrendingUp, Award, PlayCircle, CheckCircle, Lock } from 'lucide-react';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const courses = [
  {
    id: 1,
    title: 'Fundamentos de Finanzas Personales',
    description: 'Aprende los conceptos básicos para manejar tu dinero como estudiante',
    duration: '4 semanas',
    lessons: 12,
    progress: 75,
    rating: 4.8,
    students: 1234,
    level: 'Principiante',
    unlocked: true,
    image: '💰'
  },
  {
    id: 2,
    title: 'Presupuesto Inteligente',
    description: 'Crea y mantén presupuestos efectivos que se adapten a tu vida universitaria',
    duration: '3 semanas',
    lessons: 10,
    progress: 45,
    rating: 4.9,
    students: 982,
    level: 'Principiante',
    unlocked: true,
    image: '📊'
  },
  {
    id: 3,
    title: 'Ahorro para Estudiantes',
    description: 'Estrategias probadas para ahorrar dinero mientras estudias',
    duration: '2 semanas',
    lessons: 8,
    progress: 0,
    rating: 4.7,
    students: 856,
    level: 'Intermedio',
    unlocked: true,
    image: '🐷'
  },
  {
    id: 4,
    title: 'Inversiones Básicas',
    description: 'Introducción al mundo de las inversiones y cómo empezar',
    duration: '6 semanas',
    lessons: 18,
    progress: 0,
    rating: 4.9,
    students: 645,
    level: 'Intermedio',
    unlocked: false,
    image: '📈'
  },
  {
    id: 5,
    title: 'Criptomonedas 101',
    description: 'Entiende el mundo de las criptomonedas y blockchain',
    duration: '5 semanas',
    lessons: 15,
    progress: 0,
    rating: 4.6,
    students: 534,
    level: 'Avanzado',
    unlocked: false,
    image: '₿'
  },
  {
    id: 6,
    title: 'Emprendimiento Estudiantil',
    description: 'Genera ingresos extra mientras estudias con proyectos propios',
    duration: '8 semanas',
    lessons: 24,
    progress: 0,
    rating: 4.8,
    students: 723,
    level: 'Avanzado',
    unlocked: false,
    image: '🚀'
  }
];

export function CoursesPage() {
  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block mb-4"
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
            <div className="w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.8)] text-4xl">
              🎓
            </div>
          </motion.div>
          <h1 className="text-5xl text-[#00ff88] mb-4">Academia EduCash</h1>
          <p className="text-[#00cc66] text-xl max-w-2xl mx-auto">
            Aprende a dominar tus finanzas con cursos diseñados especialmente para estudiantes
          </p>
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { icon: BookOpen, label: 'Cursos', value: '6+', color: '#00ff88' },
            { icon: Clock, label: 'Horas', value: '120+', color: '#00cc66' },
            { icon: Award, label: 'Certificados', value: '3', color: '#14f195' },
            { icon: TrendingUp, label: 'Progreso', value: '40%', color: '#5fffc0' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-xl p-6 text-center perspective-container"
              style={{ transformStyle: 'preserve-3d' }}
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 10,
                borderColor: stat.color,
                boxShadow: `0 0 40px ${stat.color}80`,
                transition: { duration: 0.3 }
              }}
            >
              <stat.icon className="h-8 w-8 mx-auto mb-2" style={{ color: stat.color }} />
              <p className="text-3xl mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-[#00cc66] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="perspective-container"
              initial={{ opacity: 0, y: 100, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.6,
                type: 'spring',
                stiffness: 100
              }}
            >
              <motion.div
                className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl overflow-hidden h-full"
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 5,
                  borderColor: 'rgba(0, 255, 136, 0.6)',
                  boxShadow: '0 0 60px rgba(0, 255, 136, 0.4)',
                  transition: { duration: 0.3 }
                }}
              >
                {/* Course Header */}
                <div className="relative h-40 bg-gradient-to-br from-[#00ff88]/20 to-[#00cc66]/20 flex items-center justify-center overflow-hidden">
                  {/* Animated Background Pattern */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear'
                    }}
                    style={{
                      backgroundImage: 'linear-gradient(45deg, rgba(0,255,136,0.1) 25%, transparent 25%, transparent 75%, rgba(0,255,136,0.1) 75%)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  
                  <motion.div
                    className="text-8xl relative z-10"
                    animate={{
                      rotateY: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5
                    }}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {course.image}
                  </motion.div>

                  {/* Unlock Status */}
                  {!course.unlocked && (
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm border border-[#00ff88]/50 rounded-full p-2">
                      <Lock className="h-5 w-5 text-[#00ff88]" />
                    </div>
                  )}

                  {/* Level Badge */}
                  <div className="absolute bottom-4 left-4 bg-[#00ff88] text-black px-3 py-1 rounded-full text-xs">
                    {course.level}
                  </div>
                </div>

                {/* Course Content */}
                <div className="p-6">
                  <h3 className="text-[#00ff88] text-xl mb-2">{course.title}</h3>
                  <p className="text-[#00cc66] text-sm mb-4">{course.description}</p>

                  {/* Course Info */}
                  <div className="flex items-center gap-4 text-sm text-[#00cc66] mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      {course.lessons} lecciones
                    </div>
                  </div>

                  {/* Rating & Students */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#00ff88] text-[#00ff88]" />
                      <span className="text-[#00ff88]">{course.rating}</span>
                    </div>
                    <span className="text-[#00cc66] text-sm">{course.students} estudiantes</span>
                  </div>

                  {/* Progress Bar */}
                  {course.unlocked && course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[#00cc66] text-sm">Progreso</span>
                        <span className="text-[#00ff88] text-sm">{course.progress}%</span>
                      </div>
                      <Progress 
                        value={course.progress} 
                        className="h-2 bg-[#0a0e0a]"
                      />
                    </div>
                  )}

                  {/* Action Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className={`w-full ${
                        course.unlocked
                          ? 'bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_20px_rgba(0,255,136,0.5)]'
                          : 'bg-[#0a0e0a] text-[#00ff88] border border-[#00ff88]/30 hover:border-[#00ff88]'
                      } transition-all duration-300`}
                      disabled={!course.unlocked}
                    >
                      {course.unlocked ? (
                        course.progress > 0 ? (
                          <>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Continuar
                          </>
                        ) : (
                          <>
                            <PlayCircle className="mr-2 h-4 w-4" />
                            Comenzar
                          </>
                        )
                      ) : (
                        <>
                          <Lock className="mr-2 h-4 w-4" />
                          Bloqueado
                        </>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Achievement Section */}
        <motion.div
          className="mt-12 bg-gradient-to-r from-[#00ff88]/10 to-[#00cc66]/10 border-2 border-[#00ff88]/30 rounded-2xl p-8 perspective-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{
            scale: 1.02,
            borderColor: 'rgba(0, 255, 136, 0.6)',
            transition: { duration: 0.3 }
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <motion.div
              className="flex-shrink-0"
              animate={{
                rotateY: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="w-24 h-24 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.8)] text-5xl">
                🏆
              </div>
            </motion.div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl text-[#00ff88] mb-2">¡Desbloquea más cursos!</h3>
              <p className="text-[#00cc66] mb-4">
                Completa cursos y gana certificados para desbloquear contenido avanzado
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  { name: 'Ahorrador Pro', unlocked: true },
                  { name: 'Maestro del Presupuesto', unlocked: true },
                  { name: 'Inversor Junior', unlocked: false },
                ].map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${
                      achievement.unlocked
                        ? 'bg-[#00ff88]/20 border-[#00ff88] text-[#00ff88]'
                        : 'bg-[#0a0e0a] border-[#00ff88]/30 text-[#00cc66]'
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    {achievement.unlocked ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <Lock className="h-4 w-4" />
                    )}
                    <span className="text-sm">{achievement.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
