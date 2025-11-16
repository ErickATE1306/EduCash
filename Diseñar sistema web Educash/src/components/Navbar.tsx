import { motion } from 'motion/react';
import { Home, BookOpen, Wallet, Settings, User, Menu, X, LogOut, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const navItems = [
  { id: 'dashboard', icon: Home, label: 'Inicio' },
  { id: 'courses', icon: BookOpen, label: 'Cursos' },
  { id: 'wallet', icon: Wallet, label: 'Billetera' },
  { id: 'settings', icon: Settings, label: 'Configuración' },
];

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  username: string;
  onLogout: () => void;
}

export function Navbar({ onNavigate, currentPage, username, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId as any);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#00ff88]/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={() => handleNavClick('dashboard')}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-[#00ff88] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                <span className="text-black">$</span>
              </div>
              <span className="text-xl text-[#00ff88]">EDUCASH</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className={`transition-all duration-300 ${
                      currentPage === item.id
                        ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/50'
                        : 'text-[#00cc66] hover:bg-[#00ff88]/10 hover:text-[#00ff88]'
                    }`}
                    onClick={() => handleNavClick(item.id)}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </motion.div>
              ))}
              
              {/* Demo Button */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="ghost"
                  className={`transition-all duration-300 ${
                    currentPage === 'demo'
                      ? 'bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/50'
                      : 'text-[#00cc66] hover:bg-[#00ff88]/10 hover:text-[#00ff88]'
                  }`}
                  onClick={() => handleNavClick('demo')}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </motion.div>
            </div>

            {/* User Profile & Logout */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-[#00ff88]/10 border border-[#00ff88]/30 rounded-lg hover:border-[#00ff88] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-[#00ff88] rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-black" />
                </div>
                <span className="text-[#00ff88] text-sm">{username}</span>
              </motion.div>
              
              <motion.button
                onClick={onLogout}
                className="p-2 text-[#00ff88] hover:text-[#00cc66] hover:bg-[#00ff88]/10 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <LogOut className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#00ff88]"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-lg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="container mx-auto px-4 pt-24">
            <div className="flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                    currentPage === item.id
                      ? 'bg-[#00ff88]/20 border-2 border-[#00ff88] text-[#00ff88]'
                      : 'bg-[#00ff88]/10 border-2 border-[#00ff88]/30 text-[#00cc66] hover:border-[#00ff88]'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleNavClick(item.id)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
              
              {/* Demo Button Mobile */}
              <motion.button
                className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 ${
                  currentPage === 'demo'
                    ? 'bg-[#00ff88]/20 border-2 border-[#00ff88] text-[#00ff88]'
                    : 'bg-[#00ff88]/10 border-2 border-[#00ff88]/30 text-[#00cc66] hover:border-[#00ff88]'
                }`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavClick('demo')}
              >
                <Sparkles className="h-5 w-5" />
                <span>Demo</span>
              </motion.button>
              
              {/* User Profile Mobile */}
              <motion.div
                className="flex items-center gap-4 p-4 bg-[#00ff88]/10 border-2 border-[#00ff88]/30 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-10 h-10 bg-[#00ff88] rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-black" />
                </div>
                <div className="flex-1">
                  <p className="text-[#00ff88]">{username}</p>
                  <p className="text-[#00cc66] text-sm">Ver perfil</p>
                </div>
              </motion.div>
              
              {/* Logout Button Mobile */}
              <motion.button
                className="flex items-center gap-4 p-4 bg-red-500/10 border-2 border-red-500/30 rounded-lg text-red-500 hover:border-red-500 transition-all duration-300"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => {
                  setIsOpen(false);
                  onLogout();
                }}
              >
                <LogOut className="h-5 w-5" />
                <span>Cerrar Sesión</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}