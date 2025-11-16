import { useState } from 'react';
import { motion } from 'motion/react';
import { User, Mail, Lock, Eye, EyeOff, Sparkles, UserPlus, LogIn } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LoginPageProps {
  onLogin: (username: string) => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegistering) {
      // Registrar nuevo usuario
      if (formData.password === formData.confirmPassword) {
        localStorage.setItem('educash_user', JSON.stringify({
          username: formData.username,
          email: formData.email,
          registeredAt: new Date().toISOString()
        }));
        onLogin(formData.username);
      }
    } else {
      // Login
      onLogin(formData.username || 'Estudiante');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Animated 3D Cards */}
        <motion.div
          className="hidden md:block perspective-container"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative h-[500px]">
            {/* Floating Card 1 */}
            <motion.div
              className="absolute top-0 left-0 w-64 h-40 bg-gradient-to-br from-[#00ff88]/20 to-[#00cc66]/20 border-2 border-[#00ff88] rounded-xl backdrop-blur-lg"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateY: [0, 10, -10, 0],
                rotateX: [0, 5, -5, 0],
                translateZ: [0, 50, 0],
                translateY: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#00ff88] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.8)]">
                    <span className="text-black text-lg">$</span>
                  </div>
                  <div>
                    <p className="text-[#00ff88] text-xs">Saldo Total</p>
                    <p className="text-[#00ff88] text-xl">$1,234.56</p>
                  </div>
                </div>
                <div className="text-[#00ff88]/60 text-xs">*** *** *** 4321</div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              className="absolute top-32 left-20 w-64 h-40 bg-gradient-to-br from-[#00cc66]/20 to-[#00aa55]/20 border-2 border-[#00cc66] rounded-xl backdrop-blur-lg"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateY: [0, -10, 10, 0],
                rotateX: [0, -5, 5, 0],
                translateZ: [0, 30, 0],
                translateY: [0, 20, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-8 w-8 text-[#00cc66]" />
                  <div>
                    <p className="text-[#00cc66] text-xs">Ahorro del Mes</p>
                    <p className="text-[#00cc66] text-xl">+$345.00</p>
                  </div>
                </div>
                <div className="text-[#00cc66]/60 text-xs">Noviembre 2025</div>
              </div>
            </motion.div>

            {/* Floating Card 3 */}
            <motion.div
              className="absolute top-64 left-40 w-64 h-40 bg-gradient-to-br from-[#14f195]/20 to-[#00ff88]/20 border-2 border-[#14f195] rounded-xl backdrop-blur-lg"
              style={{ transformStyle: 'preserve-3d' }}
              animate={{
                rotateY: [0, 15, -15, 0],
                rotateX: [0, 10, -10, 0],
                translateZ: [0, 40, 0],
                translateY: [0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1
              }}
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-[#14f195] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(20,241,149,0.8)]">
                    <span className="text-black text-lg">AI</span>
                  </div>
                  <div>
                    <p className="text-[#14f195] text-xs">Consejo IA</p>
                    <p className="text-[#14f195] text-sm">Ahorra 15% más</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Login/Register Form */}
        <motion.div
          className="perspective-container"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,255,136,0.2)]"
            style={{ transformStyle: 'preserve-3d' }}
            whileHover={{
              borderColor: 'rgba(0, 255, 136, 0.6)',
              boxShadow: '0 0 80px rgba(0, 255, 136, 0.4)',
              transition: { duration: 0.3 }
            }}
          >
            {/* Header */}
            <motion.div 
              className="text-center mb-8"
              initial={{ rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-[#00ff88] rounded-2xl mb-4 shadow-[0_0_40px_rgba(0,255,136,0.8)]"
                animate={{
                  rotateY: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <span className="text-black text-4xl">$</span>
              </motion.div>
              <h2 className="text-[#00ff88] text-3xl mb-2">
                {isRegistering ? 'Crear Cuenta' : 'Bienvenido'}
              </h2>
              <p className="text-[#00cc66]">
                {isRegistering 
                  ? 'Únete a EduCash y toma control de tus finanzas'
                  : 'Inicia sesión en tu asistente financiero'}
              </p>
            </motion.div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Label htmlFor="username" className="text-[#00ff88] mb-2 block">
                  Nombre de Usuario
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00ff88]" />
                  <Input
                    id="username"
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="pl-12 bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88] focus:ring-[#00ff88] transition-all duration-300"
                    placeholder="tu_nombre"
                    required
                  />
                </div>
              </motion.div>

              {/* Email (only for register) */}
              {isRegistering && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Label htmlFor="email" className="text-[#00ff88] mb-2 block">
                    Correo Electrónico
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00ff88]" />
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88] focus:ring-[#00ff88] transition-all duration-300"
                      placeholder="estudiante@universidad.edu"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Password */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: isRegistering ? 0.6 : 0.5 }}
              >
                <Label htmlFor="password" className="text-[#00ff88] mb-2 block">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00ff88]" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-12 pr-12 bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88] focus:ring-[#00ff88] transition-all duration-300"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00ff88] hover:text-[#00cc66] transition-colors"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </motion.div>

              {/* Confirm Password (only for register) */}
              {isRegistering && (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="confirmPassword" className="text-[#00ff88] mb-2 block">
                    Confirmar Contraseña
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00ff88]" />
                    <Input
                      id="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-12 bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88] focus:ring-[#00ff88] transition-all duration-300"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_30px_rgba(0,255,136,0.6)] hover:shadow-[0_0_50px_rgba(0,255,136,0.9)] transition-all duration-300"
                >
                  <motion.div
                    className="flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isRegistering ? (
                      <>
                        <UserPlus className="h-5 w-5" />
                        Registrarse
                      </>
                    ) : (
                      <>
                        <LogIn className="h-5 w-5" />
                        Iniciar Sesión
                      </>
                    )}
                  </motion.div>
                </Button>
              </motion.div>

              {/* Toggle Login/Register */}
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <button
                  type="button"
                  onClick={() => setIsRegistering(!isRegistering)}
                  className="text-[#00ff88] hover:text-[#00cc66] transition-colors"
                >
                  {isRegistering 
                    ? '¿Ya tienes cuenta? Inicia sesión'
                    : '¿No tienes cuenta? Regístrate'}
                </button>
              </motion.div>
            </form>

            {/* Demo Access */}
            <motion.div
              className="mt-6 pt-6 border-t border-[#00ff88]/20 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-[#00cc66] text-sm mb-3">O prueba la versión demo</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => onLogin('Demo')}
                className="border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88]/10 hover:border-[#00ff88] transition-all duration-300"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                Acceso Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
