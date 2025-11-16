import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown,
  PiggyBank,
  Plus,
  BarChart3,
  Home as HomeIcon
} from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { TransactionForm } from './TransactionForm';
import { TransactionList } from './TransactionList';
import { AIAssistant } from './AIAssistant';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
}

export function FinanceDashboard() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Cargar transacciones del localStorage
  useEffect(() => {
    const saved = localStorage.getItem('educash_transactions');
    if (saved) {
      setTransactions(JSON.parse(saved));
    }
  }, []);

  // Guardar transacciones en localStorage
  useEffect(() => {
    localStorage.setItem('educash_transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (transaction: Omit<Transaction, 'id'>) => {
    const newTransaction = {
      ...transaction,
      id: Date.now().toString(),
    };
    setTransactions([newTransaction, ...transactions]);
  };

  const handleDeleteTransaction = (id: string) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  // Cálculos financieros
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;
  const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100) : 0;

  const stats = [
    { 
      label: 'Balance Total', 
      value: `$${balance.toFixed(2)}`, 
      change: savingsRate > 0 ? `+${savingsRate.toFixed(1)}%` : `${savingsRate.toFixed(1)}%`,
      icon: DollarSign,
      trend: balance >= 0 ? 'up' : 'down'
    },
    { 
      label: 'Ingresos', 
      value: `$${totalIncome.toFixed(2)}`, 
      change: `${transactions.filter(t => t.type === 'income').length} registros`,
      icon: TrendingUp,
      trend: 'up'
    },
    { 
      label: 'Gastos', 
      value: `$${totalExpenses.toFixed(2)}`, 
      change: `${transactions.filter(t => t.type === 'expense').length} registros`,
      icon: TrendingDown,
      trend: 'down'
    },
    { 
      label: 'Tasa de Ahorro', 
      value: `${savingsRate.toFixed(1)}%`, 
      change: savingsRate >= 20 ? 'Excelente' : savingsRate >= 10 ? 'Bueno' : 'Mejorar',
      icon: PiggyBank,
      trend: savingsRate >= 20 ? 'up' : 'down'
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-4xl text-[#059669]">
              Mi Panel Financiero
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#059669] rounded-full animate-pulse-green" />
              <span className="text-[#047857] text-sm">Sistema Activo</span>
            </div>
          </div>
          <p className="text-[#047857]">Gestiona tus finanzas como un estudiante inteligente 🎓</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-black/80 border border-[#059669]/30">
            <TabsTrigger value="overview" className="data-[state=active]:bg-[#059669] data-[state=active]:text-black">
              <HomeIcon className="h-4 w-4 mr-2" />
              Vista General
            </TabsTrigger>
            <TabsTrigger value="add" className="data-[state=active]:bg-[#059669] data-[state=active]:text-black">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Transacción
            </TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-[#059669] data-[state=active]:text-black">
              <BarChart3 className="h-4 w-4 mr-2" />
              Análisis IA
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TransactionList 
                  transactions={transactions}
                  onDeleteTransaction={handleDeleteTransaction}
                />
              </div>
              <div>
                <AIAssistant transactions={transactions} />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="add" className="space-y-6">
            <div className="max-w-2xl mx-auto">
              <TransactionForm onAddTransaction={handleAddTransaction} />
            </div>
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            <AIAssistant transactions={transactions} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function StatCard({ stat, index }: { stat: any; index: number }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotateY: 5 }}
    >
      <Card className="relative group bg-black/80 backdrop-blur-sm border-[#059669]/30 p-6 hover:border-[#059669] transition-all duration-300 overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#059669]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="relative space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-[#047857] text-sm">{stat.label}</p>
            <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center text-[#059669] group-hover:bg-[#059669] group-hover:text-black transition-all duration-300">
              <Icon className="h-5 w-5" />
            </div>
          </div>
          
          <p className="text-2xl text-[#059669]">{stat.value}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-[#047857] text-sm">{stat.change}</span>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
