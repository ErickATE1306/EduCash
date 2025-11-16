import { useState } from 'react';
import { motion } from 'motion/react';
import { Settings, User, Bell, Lock, Palette, Globe, Moon, Sun, Shield, Database, Trash2, LogOut, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';

const settingsSections = [
  {
    id: 'profile',
    icon: User,
    title: 'Perfil',
    description: 'Gestiona tu información personal',
  },
  {
    id: 'notifications',
    icon: Bell,
    title: 'Notificaciones',
    description: 'Configura alertas y recordatorios',
  },
  {
    id: 'security',
    icon: Lock,
    title: 'Seguridad',
    description: 'Contraseña y autenticación',
  },
  {
    id: 'appearance',
    icon: Palette,
    title: 'Apariencia',
    description: 'Personaliza la interfaz',
  },
  {
    id: 'data',
    icon: Database,
    title: 'Datos',
    description: 'Exportar y gestionar datos',
  },
];

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState('profile');
  const [settings, setSettings] = useState({
    notifications: {
      transactions: true,
      budgetAlerts: true,
      savingsGoals: true,
      aiTips: false,
      email: true,
    },
    appearance: {
      theme: 'dark',
      animations: true,
      language: 'es',
    },
    profile: {
      name: 'Estudiante Demo',
      email: 'estudiante@universidad.edu',
      phone: '+52 123 456 7890',
    }
  });

  const updateSetting = (section: string, key: string, value: any) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section as keyof typeof prev],
        [key]: value
      }
    }));
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'profile':
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-[#00ff88] mb-2 block">
                Nombre Completo
              </Label>
              <Input
                id="name"
                type="text"
                value={settings.profile.name}
                onChange={(e) => updateSetting('profile', 'name', e.target.value)}
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-[#00ff88] mb-2 block">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={settings.profile.email}
                onChange={(e) => updateSetting('profile', 'email', e.target.value)}
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-[#00ff88] mb-2 block">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                value={settings.profile.phone}
                onChange={(e) => updateSetting('profile', 'phone', e.target.value)}
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
              />
            </div>
            <Button className="w-full bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_30px_rgba(0,255,136,0.6)]">
              <Check className="mr-2 h-4 w-4" />
              Guardar Cambios
            </Button>
          </div>
        );

      case 'notifications':
        return (
          <div className="space-y-4">
            {[
              { key: 'transactions', label: 'Notificar nuevas transacciones', description: 'Recibe alertas cuando registres ingresos o gastos' },
              { key: 'budgetAlerts', label: 'Alertas de presupuesto', description: 'Te avisamos cuando te acerques al límite' },
              { key: 'savingsGoals', label: 'Metas de ahorro', description: 'Seguimiento de tus objetivos financieros' },
              { key: 'aiTips', label: 'Consejos de IA', description: 'Recomendaciones personalizadas del asistente' },
              { key: 'email', label: 'Notificaciones por email', description: 'Recibe resúmenes semanales por correo' },
            ].map((item, index) => (
              <motion.div
                key={item.key}
                className="flex items-center justify-between p-4 bg-[#0a0e0a] rounded-xl border border-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all duration-300"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-1">
                  <p className="text-[#00ff88] mb-1">{item.label}</p>
                  <p className="text-[#00cc66] text-sm">{item.description}</p>
                </div>
                <Switch
                  checked={settings.notifications[item.key as keyof typeof settings.notifications]}
                  onCheckedChange={(checked) => updateSetting('notifications', item.key, checked)}
                />
              </motion.div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="bg-[#00ff88]/10 border-2 border-[#00ff88]/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-[#00ff88]" />
                <p className="text-[#00ff88]">Tu cuenta está protegida</p>
              </div>
              <p className="text-[#00cc66] text-sm">Última actividad: Hoy a las 10:30 AM</p>
            </div>

            <div>
              <Label htmlFor="current-password" className="text-[#00ff88] mb-2 block">
                Contraseña Actual
              </Label>
              <Input
                id="current-password"
                type="password"
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label htmlFor="new-password" className="text-[#00ff88] mb-2 block">
                Nueva Contraseña
              </Label>
              <Input
                id="new-password"
                type="password"
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
                placeholder="••••••••"
              />
            </div>

            <div>
              <Label htmlFor="confirm-password" className="text-[#00ff88] mb-2 block">
                Confirmar Contraseña
              </Label>
              <Input
                id="confirm-password"
                type="password"
                className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88] focus:border-[#00ff88]"
                placeholder="••••••••"
              />
            </div>

            <Button className="w-full bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_30px_rgba(0,255,136,0.6)]">
              <Lock className="mr-2 h-4 w-4" />
              Actualizar Contraseña
            </Button>
          </div>
        );

      case 'appearance':
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-[#00ff88] mb-3 block">Tema</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'dark', icon: Moon, label: 'Oscuro' },
                  { value: 'light', icon: Sun, label: 'Claro' },
                ].map((theme) => (
                  <motion.button
                    key={theme.value}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      settings.appearance.theme === theme.value
                        ? 'bg-[#00ff88]/20 border-[#00ff88]'
                        : 'bg-[#0a0e0a] border-[#00ff88]/20 hover:border-[#00ff88]/50'
                    }`}
                    onClick={() => updateSetting('appearance', 'theme', theme.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <theme.icon className={`h-8 w-8 mx-auto mb-2 ${
                      settings.appearance.theme === theme.value ? 'text-[#00ff88]' : 'text-[#00cc66]'
                    }`} />
                    <p className={settings.appearance.theme === theme.value ? 'text-[#00ff88]' : 'text-[#00cc66]'}>
                      {theme.label}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-[#0a0e0a] rounded-xl border border-[#00ff88]/20">
              <div>
                <p className="text-[#00ff88] mb-1">Animaciones 3D</p>
                <p className="text-[#00cc66] text-sm">Efectos visuales avanzados</p>
              </div>
              <Switch
                checked={settings.appearance.animations}
                onCheckedChange={(checked) => updateSetting('appearance', 'animations', checked)}
              />
            </div>

            <div>
              <Label className="text-[#00ff88] mb-3 block">Idioma</Label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'es', flag: '🇪🇸', label: 'Español' },
                  { value: 'en', flag: '🇺🇸', label: 'English' },
                ].map((lang) => (
                  <motion.button
                    key={lang.value}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      settings.appearance.language === lang.value
                        ? 'bg-[#00ff88]/20 border-[#00ff88]'
                        : 'bg-[#0a0e0a] border-[#00ff88]/20 hover:border-[#00ff88]/50'
                    }`}
                    onClick={() => updateSetting('appearance', 'language', lang.value)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-4xl mb-2 block">{lang.flag}</span>
                    <p className={settings.appearance.language === lang.value ? 'text-[#00ff88]' : 'text-[#00cc66]'}>
                      {lang.label}
                    </p>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        );

      case 'data':
        return (
          <div className="space-y-6">
            <div className="bg-[#00ff88]/10 border-2 border-[#00ff88]/30 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-2">
                <Database className="h-5 w-5 text-[#00ff88]" />
                <p className="text-[#00ff88]">Gestión de Datos</p>
              </div>
              <p className="text-[#00cc66] text-sm">Tus datos están almacenados localmente en tu dispositivo</p>
            </div>

            <Button
              variant="outline"
              className="w-full border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88]/10 justify-start"
            >
              <Database className="mr-2 h-4 w-4" />
              Exportar Datos (JSON)
            </Button>

            <Button
              variant="outline"
              className="w-full border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88]/10 justify-start"
            >
              <Database className="mr-2 h-4 w-4" />
              Exportar Reporte (PDF)
            </Button>

            <div className="border-t border-[#00ff88]/20 pt-6 mt-6">
              <h3 className="text-red-500 mb-4">Zona de Peligro</h3>
              
              <Button
                variant="outline"
                className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10 justify-start mb-3"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Borrar Todos los Datos
              </Button>

              <Button
                variant="outline"
                className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10 justify-start"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
            <div className="w-20 h-20 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-2xl flex items-center justify-center shadow-[0_0_50px_rgba(0,255,136,0.8)]">
              <Settings className="h-10 w-10 text-black" />
            </div>
          </motion.div>
          <h1 className="text-5xl text-[#00ff88] mb-4">Configuración</h1>
          <p className="text-[#00cc66] text-xl">
            Personaliza tu experiencia en EduCash
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Settings Menu */}
          <motion.div
            className="lg:col-span-1 space-y-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {settingsSections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`w-full p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                  activeSection === section.id
                    ? 'bg-[#00ff88]/20 border-[#00ff88]'
                    : 'bg-black/60 border-[#00ff88]/20 hover:border-[#00ff88]/50'
                }`}
                onClick={() => setActiveSection(section.id)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeSection === section.id
                      ? 'bg-[#00ff88] text-black'
                      : 'bg-[#00ff88]/20 text-[#00ff88]'
                  }`}>
                    <section.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className={activeSection === section.id ? 'text-[#00ff88]' : 'text-[#00cc66]'}>
                      {section.title}
                    </p>
                    <p className="text-[#00cc66] text-xs">
                      {section.description}
                    </p>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Settings Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6 md:p-8 perspective-container"
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{
                borderColor: 'rgba(0, 255, 136, 0.5)',
                transition: { duration: 0.3 }
              }}
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <h2 className="text-2xl text-[#00ff88] mb-6">
                {settingsSections.find(s => s.id === activeSection)?.title}
              </h2>
              {renderSection()}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
