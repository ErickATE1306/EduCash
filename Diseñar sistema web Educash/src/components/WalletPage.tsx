import { useState } from 'react';
import { motion } from 'motion/react';
import { Wallet, CreditCard, Send, Download, TrendingUp, TrendingDown, DollarSign, Plus, ArrowUpRight, ArrowDownLeft, QrCode, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

const walletBalance = {
  total: 1234.56,
  available: 1034.56,
  pending: 200.00
};

const recentTransactions = [
  { id: 1, type: 'income', description: 'Mesada mensual', amount: 500.00, date: '2025-11-15', category: 'Ingreso' },
  { id: 2, type: 'expense', description: 'Almuerzo cafetería', amount: -12.50, date: '2025-11-14', category: 'Comida' },
  { id: 3, type: 'income', description: 'Freelance diseño', amount: 150.00, date: '2025-11-13', category: 'Trabajo' },
  { id: 4, type: 'expense', description: 'Libros universidad', amount: -85.00, date: '2025-11-12', category: 'Educación' },
  { id: 5, type: 'expense', description: 'Transporte', amount: -15.00, date: '2025-11-11', category: 'Transporte' },
];

const cards = [
  { id: 1, name: 'Cuenta Principal', number: '4532 **** **** 4321', balance: 834.56, type: 'debit', color: 'from-[#00ff88] to-[#00cc66]' },
  { id: 2, name: 'Ahorro Meta', number: '4532 **** **** 7890', balance: 400.00, type: 'savings', color: 'from-[#14f195] to-[#00ff88]' },
];

export function WalletPage() {
  const [selectedCard, setSelectedCard] = useState(0);
  const [showTransfer, setShowTransfer] = useState(false);

  return (
    <div className="min-h-screen px-4 py-20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl text-[#00ff88] mb-2">Mi Billetera</h1>
              <p className="text-[#00cc66]">Gestiona tu dinero de forma inteligente</p>
            </div>
            <motion.div
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
              <div className="w-16 h-16 bg-gradient-to-br from-[#00ff88] to-[#00cc66] rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,255,136,0.8)]">
                <Wallet className="h-8 w-8 text-black" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Cards & Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            {/* Virtual Cards Carousel */}
            <motion.div
              className="perspective-container"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="relative h-64">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    className={`absolute inset-0 cursor-pointer ${index === selectedCard ? 'z-20' : 'z-10'}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      left: index * 30,
                      top: index * 20,
                    }}
                    initial={{ rotateY: -45, opacity: 0 }}
                    animate={{
                      rotateY: selectedCard === index ? 0 : -15,
                      opacity: 1,
                      scale: selectedCard === index ? 1 : 0.95,
                    }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => setSelectedCard(index)}
                    whileHover={{
                      scale: 1.05,
                      rotateY: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className={`h-full bg-gradient-to-br ${card.color} rounded-3xl p-8 shadow-[0_0_50px_rgba(0,255,136,0.5)] border-2 border-white/20`}>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 bg-black/30 rounded-lg flex items-center justify-center backdrop-blur-sm">
                            {card.type === 'debit' ? (
                              <CreditCard className="h-5 w-5 text-white" />
                            ) : (
                              <TrendingUp className="h-5 w-5 text-white" />
                            )}
                          </div>
                          <span className="text-white text-sm">{card.name}</span>
                        </div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                          <div className="w-8 h-8 bg-white/30 rounded-full backdrop-blur-sm" />
                        </motion.div>
                      </div>

                      {/* Card Number */}
                      <div className="mb-8">
                        <p className="text-white/70 text-xs mb-1">Número de Tarjeta</p>
                        <p className="text-white text-xl tracking-wider">{card.number}</p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-end justify-between">
                        <div>
                          <p className="text-white/70 text-xs mb-1">Saldo Disponible</p>
                          <p className="text-white text-3xl">${card.balance.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-white/70 text-xs">Válida hasta</p>
                          <p className="text-white">12/27</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {[
                { icon: Send, label: 'Transferir', color: '#00ff88', action: () => setShowTransfer(!showTransfer) },
                { icon: Download, label: 'Recargar', color: '#00cc66' },
                { icon: QrCode, label: 'Escanear', color: '#14f195' },
                { icon: Plus, label: 'Agregar', color: '#5fffc0' },
              ].map((action, index) => (
                <motion.button
                  key={action.label}
                  className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-xl p-6 text-center perspective-container hover:border-[#00ff88] transition-all duration-300"
                  style={{ transformStyle: 'preserve-3d' }}
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: `0 0 40px ${action.color}80`,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action.action}
                >
                  <action.icon className="h-8 w-8 mx-auto mb-2" style={{ color: action.color }} />
                  <p className="text-[#00ff88]">{action.label}</p>
                </motion.button>
              ))}
            </motion.div>

            {/* Transfer Form */}
            {showTransfer && (
              <motion.div
                className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <h3 className="text-[#00ff88] text-xl mb-4">Nueva Transferencia</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="recipient" className="text-[#00ff88] mb-2 block">
                      Destinatario
                    </Label>
                    <Input
                      id="recipient"
                      type="text"
                      className="bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88]"
                      placeholder="Nombre o correo"
                    />
                  </div>
                  <div>
                    <Label htmlFor="amount" className="text-[#00ff88] mb-2 block">
                      Cantidad
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#00ff88]" />
                      <Input
                        id="amount"
                        type="number"
                        className="pl-12 bg-[#0a0e0a] border-[#00ff88]/30 text-[#00ff88]"
                        placeholder="0.00"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-[#00ff88] text-black hover:bg-[#00cc66] shadow-[0_0_30px_rgba(0,255,136,0.6)]">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar Dinero
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Recent Transactions */}
            <motion.div
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-[#00ff88] text-xl mb-4">Transacciones Recientes</h3>
              <div className="space-y-3">
                {recentTransactions.map((transaction, index) => (
                  <motion.div
                    key={transaction.id}
                    className="flex items-center justify-between p-4 bg-[#0a0e0a] rounded-xl border border-[#00ff88]/20 hover:border-[#00ff88]/50 transition-all duration-300"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'income' 
                          ? 'bg-[#00ff88]/20 text-[#00ff88]' 
                          : 'bg-red-500/20 text-red-500'
                      }`}>
                        {transaction.type === 'income' ? (
                          <ArrowDownLeft className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <p className="text-[#00ff88]">{transaction.description}</p>
                        <p className="text-[#00cc66] text-sm">{transaction.date} • {transaction.category}</p>
                      </div>
                    </div>
                    <div className={`text-right ${
                      transaction.type === 'income' ? 'text-[#00ff88]' : 'text-red-500'
                    }`}>
                      <p className="text-lg">${Math.abs(transaction.amount).toFixed(2)}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Balance & Stats */}
          <div className="space-y-6">
            {/* Balance Overview */}
            <motion.div
              className="bg-gradient-to-br from-[#00ff88]/20 to-[#00cc66]/20 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6 perspective-container"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                borderColor: 'rgba(0, 255, 136, 0.6)',
                transition: { duration: 0.3 }
              }}
            >
              <h3 className="text-[#00ff88] mb-4">Balance Total</h3>
              <motion.div
                className="text-5xl text-[#00ff88] mb-6"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ${walletBalance.total.toFixed(2)}
              </motion.div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                  <span className="text-[#00cc66]">Disponible</span>
                  <span className="text-[#00ff88]">${walletBalance.available.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-black/40 rounded-lg">
                  <span className="text-[#00cc66]">Pendiente</span>
                  <span className="text-yellow-500">${walletBalance.pending.toFixed(2)}</span>
                </div>
              </div>
            </motion.div>

            {/* Monthly Stats */}
            <motion.div
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-[#00ff88] mb-4">Este Mes</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#00ff88]/20 rounded-lg flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-[#00ff88]" />
                    </div>
                    <div>
                      <p className="text-[#00cc66] text-sm">Ingresos</p>
                      <p className="text-[#00ff88] text-xl">$650.00</p>
                    </div>
                  </div>
                  <div className="text-[#00ff88] text-sm">+15%</div>
                </div>
                <div className="h-px bg-[#00ff88]/20" />
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <TrendingDown className="h-5 w-5 text-red-500" />
                    </div>
                    <div>
                      <p className="text-[#00cc66] text-sm">Gastos</p>
                      <p className="text-red-500 text-xl">$112.50</p>
                    </div>
                  </div>
                  <div className="text-red-500 text-sm">-8%</div>
                </div>
              </div>
            </motion.div>

            {/* Wallet Address */}
            <motion.div
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-[#00ff88] mb-4">ID de Billetera</h3>
              <div className="bg-[#0a0e0a] rounded-lg p-4 mb-3">
                <p className="text-[#00cc66] text-xs mb-2 break-all">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-[#00ff88]/50 text-[#00ff88] hover:bg-[#00ff88]/10"
              >
                <Copy className="mr-2 h-4 w-4" />
                Copiar Dirección
              </Button>
            </motion.div>

            {/* QR Code */}
            <motion.div
              className="bg-black/60 backdrop-blur-xl border-2 border-[#00ff88]/30 rounded-2xl p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="text-[#00ff88] mb-4 text-center">Recibir Pago</h3>
              <motion.div
                className="bg-white rounded-xl p-4 aspect-square flex items-center justify-center"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'linear'
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <QrCode className="h-32 w-32 text-black" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
