import { motion } from 'motion/react';
import { Home, BookOpen, Wallet, Settings, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

const navItems = [
  { icon: Home, label: 'Inicio' },
  { icon: BookOpen, label: 'Cursos' },
  { icon: Wallet, label: 'Billetera' },
  { icon: Settings, label: 'Configuración' },
];

export function Navbar({ onLogoClick }: { onLogoClick: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#059669]/30"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.button
              onClick={onLogoClick}
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-[#059669] rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(5,150,105,0.5)]">
                <span className="text-black">$</span>
              </div>
              <span className="text-xl text-[#059669]">EDUCASH</span>
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="text-[#059669] hover:bg-[#059669]/10 hover:text-[#059669] transition-all duration-300"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </div>

            {/* User Profile */}
            <div className="hidden md:flex items-center gap-4">
              <motion.div
                className="flex items-center gap-2 px-4 py-2 bg-[#059669]/10 border border-[#059669]/30 rounded-lg hover:border-[#059669] transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-[#059669] rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-black" />
                </div>
                <span className="text-[#059669] text-sm">Estudiante</span>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-[#059669]"
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
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-[#059669]/10 border border-[#059669]/30 rounded-lg text-[#059669] hover:border-[#059669] transition-all duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.button>
              ))}
              
              <motion.div
                className="flex items-center gap-4 p-4 bg-[#059669]/10 border border-[#059669]/30 rounded-lg"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="w-10 h-10 bg-[#059669] rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-black" />
                </div>
                <div>
                  <p className="text-[#059669]">Estudiante</p>
                  <p className="text-[#047857] text-sm">Ver perfil</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
