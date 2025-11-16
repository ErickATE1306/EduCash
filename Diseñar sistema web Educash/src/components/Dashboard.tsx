import { motion } from 'motion/react';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  BookOpen, 
  CreditCard, 
  PiggyBank,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target,
  Award,
  Activity
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';

const stats = [
  { 
    label: 'Balance Total', 
    value: '$12,450.00', 
    change: '+12.5%', 
    icon: DollarSign,
    trend: 'up'
  },
  { 
    label: 'Inversiones', 
    value: '$8,230.00', 
    change: '+8.2%', 
    icon: TrendingUp,
    trend: 'up'
  },
  { 
    label: 'Ahorros', 
    value: '$4,220.00', 
    change: '-2.4%', 
    icon: PiggyBank,
    trend: 'down'
  },
  { 
    label: 'Cursos Completados', 
    value: '12', 
    change: '+3', 
    icon: BookOpen,
    trend: 'up'
  },
];

const courses = [
  { title: 'Inversión en Criptomonedas', progress: 75, category: 'Avanzado' },
  { title: 'Finanzas Personales 101', progress: 100, category: 'Básico' },
  { title: 'Trading para Principiantes', progress: 45, category: 'Intermedio' },
  { title: 'Análisis Técnico', progress: 30, category: 'Avanzado' },
];

const transactions = [
  { name: 'Compra Bitcoin', amount: -150, date: 'Hoy', category: 'Inversión' },
  { name: 'Salario', amount: 2500, date: 'Ayer', category: 'Ingreso' },
  { name: 'Curso Premium', amount: -50, date: '2 días', category: 'Educación' },
  { name: 'Dividendos ETF', amount: 75, date: '3 días', category: 'Inversión' },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,65,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,65,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl text-[#00ff41] animate-glitch">
              Dashboard
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00ff41] rounded-full animate-pulse-green" />
              <span className="text-[#00cc33] text-sm">Sistema Activo</span>
            </div>
          </div>
          <p className="text-[#00cc33]">Bienvenido de vuelta, Hacker Financiero 🚀</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="bg-black/80 backdrop-blur-sm border-[#00ff41]/30 p-6 hover:border-[#00ff41] transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[#00ff41]">Rendimiento de Inversiones</h2>
                <Button variant="outline" className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10">
                  <Activity className="mr-2 h-4 w-4" />
                  Ver Detalles
                </Button>
              </div>
              
              {/* Simulated chart */}
              <div className="h-64 relative">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  <motion.path
                    d="M 0 150 Q 50 120, 100 100 T 200 80 T 300 60 T 400 40"
                    fill="none"
                    stroke="#00ff41"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M 0 150 Q 50 120, 100 100 T 200 80 T 300 60 T 400 40 L 400 200 L 0 200 Z"
                    fill="url(#gradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 2, delay: 0.5 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00ff41" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#00ff41" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Data points */}
                {[20, 40, 60, 80].map((percent, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-[#00ff41] rounded-full shadow-[0_0_10px_rgba(0,255,65,1)]"
                    style={{ left: `${percent * 1.25}%`, top: `${80 - i * 15}%` }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                  />
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Recent Transactions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="bg-black/80 backdrop-blur-sm border-[#00ff41]/30 p-6 hover:border-[#00ff41] transition-all duration-300">
              <h2 className="text-[#00ff41] mb-4">Transacciones Recientes</h2>
              <div className="space-y-4">
                {transactions.map((transaction, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-3 bg-[#0a0e0a] rounded-lg border border-[#00ff41]/20 hover:border-[#00ff41] transition-all duration-300"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        transaction.amount > 0 ? 'bg-[#00ff41]/20' : 'bg-red-500/20'
                      }`}>
                        {transaction.amount > 0 ? (
                          <ArrowUpRight className="h-4 w-4 text-[#00ff41]" />
                        ) : (
                          <ArrowDownRight className="h-4 w-4 text-red-500" />
                        )}
                      </div>
                      <div>
                        <p className="text-[#00ff41] text-sm">{transaction.name}</p>
                        <p className="text-[#00cc33] text-xs">{transaction.date}</p>
                      </div>
                    </div>
                    <p className={`${transaction.amount > 0 ? 'text-[#00ff41]' : 'text-red-500'}`}>
                      {transaction.amount > 0 ? '+' : ''}{transaction.amount}$
                    </p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Courses Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Card className="bg-black/80 backdrop-blur-sm border-[#00ff41]/30 p-6 hover:border-[#00ff41] transition-all duration-300">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#00ff41]">Mis Cursos</h2>
              <Button className="bg-[#00ff41] text-black hover:bg-[#00cc33]">
                <Target className="mr-2 h-4 w-4" />
                Explorar Más
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/20 to-transparent rounded-lg blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-[#0a0e0a] border border-[#00ff41]/30 rounded-lg p-4 space-y-3 hover:border-[#00ff41] transition-all duration-300">
                    <div className="flex items-center justify-between">
                      <span className="text-xs px-2 py-1 bg-[#00ff41]/20 text-[#00ff41] rounded">
                        {course.category}
                      </span>
                      {course.progress === 100 && (
                        <Award className="h-4 w-4 text-[#00ff41]" />
                      )}
                    </div>
                    <h3 className="text-[#00ff41] text-sm">{course.title}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs text-[#00cc33]">
                        <span>Progreso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-[#1a1f1a]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
    >
      <Card className="relative group bg-black/80 backdrop-blur-sm border-[#00ff41]/30 p-6 hover:border-[#00ff41] transition-all duration-300 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[#00cc33] text-sm">{stat.label}</p>
            <div className="w-10 h-10 bg-[#00ff41]/10 rounded-lg flex items-center justify-center text-[#00ff41] group-hover:bg-[#00ff41] group-hover:text-black transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          
          <p className="text-2xl text-[#00ff41]">{stat.value}</p>
          
          <div className="flex items-center gap-1">
            {stat.trend === 'up' ? (
              <ArrowUpRight className="h-4 w-4 text-[#00ff41]" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-red-500" />
            )}
            <span className={`text-sm ${stat.trend === 'up' ? 'text-[#00ff41]' : 'text-red-500'}`}>
              {stat.change}
            </span>
            <span className="text-[#00cc33] text-xs">vs último mes</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
