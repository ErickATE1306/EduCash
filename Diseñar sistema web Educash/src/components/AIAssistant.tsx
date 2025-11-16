import { motion } from 'motion/react';
import { 
  Brain, 
  TrendingUp, 
  AlertCircle, 
  Lightbulb, 
  Target,
  PiggyBank,
  ShoppingBag,
  Coffee
} from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface AIAssistantProps {
  transactions: Transaction[];
}

export function AIAssistant({ transactions }: AIAssistantProps) {
  // Análisis de patrones financieros
  const analyzePatterns = () => {
    const totalIncome = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0);

    const balance = totalIncome - totalExpenses;
    const savingsRate = totalIncome > 0 ? ((balance / totalIncome) * 100) : 0;

    // Análisis por categoría
    const expensesByCategory: Record<string, number> = {};
    transactions
      .filter(t => t.type === 'expense')
      .forEach(t => {
        expensesByCategory[t.category] = (expensesByCategory[t.category] || 0) + t.amount;
      });

    const topCategory = Object.entries(expensesByCategory)
      .sort(([, a], [, b]) => b - a)[0];

    // Análisis temporal (últimos 7 días)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentExpenses = transactions
      .filter(t => t.type === 'expense' && new Date(t.date) >= sevenDaysAgo)
      .reduce((sum, t) => sum + t.amount, 0);

    const avgDailyExpense = recentExpenses / 7;

    return {
      totalIncome,
      totalExpenses,
      balance,
      savingsRate,
      topCategory,
      avgDailyExpense,
      transactionCount: transactions.length,
    };
  };

  const generateAdvice = () => {
    if (transactions.length === 0) {
      return [{
        type: 'info',
        icon: Brain,
        title: 'Comienza a registrar',
        message: 'Agrega tus primeras transacciones para recibir consejos personalizados sobre tus finanzas.',
        priority: 'low'
      }];
    }

    const analysis = analyzePatterns();
    const advice: Array<{
      type: 'success' | 'warning' | 'danger' | 'info';
      icon: any;
      title: string;
      message: string;
      priority: 'high' | 'medium' | 'low';
    }> = [];

    // Consejo sobre tasa de ahorro
    if (analysis.savingsRate > 20) {
      advice.push({
        type: 'success',
        icon: PiggyBank,
        title: '¡Excelente ahorro!',
        message: `Estás ahorrando el ${analysis.savingsRate.toFixed(1)}% de tus ingresos. ¡Sigue así!`,
        priority: 'low'
      });
    } else if (analysis.savingsRate > 0) {
      advice.push({
        type: 'warning',
        icon: Target,
        title: 'Mejora tu ahorro',
        message: `Solo ahorras el ${analysis.savingsRate.toFixed(1)}%. Intenta alcanzar al menos el 20% para emergencias.`,
        priority: 'medium'
      });
    } else {
      advice.push({
        type: 'danger',
        icon: AlertCircle,
        title: '⚠️ Gastas más de lo que ganas',
        message: 'Tus gastos superan tus ingresos. Revisa tus gastos y considera reducir gastos innecesarios.',
        priority: 'high'
      });
    }

    // Consejo sobre categoría principal de gastos
    if (analysis.topCategory) {
      const [category, amount] = analysis.topCategory;
      const percentage = ((amount / analysis.totalExpenses) * 100).toFixed(1);
      
      if (parseFloat(percentage) > 40) {
        advice.push({
          type: 'warning',
          icon: ShoppingBag,
          title: 'Categoría dominante',
          message: `El ${percentage}% de tus gastos va a ${category}. Considera diversificar tus gastos.`,
          priority: 'medium'
        });
      }
    }

    // Consejo sobre gasto diario promedio
    if (analysis.avgDailyExpense > 0) {
      const monthlyProjection = analysis.avgDailyExpense * 30;
      advice.push({
        type: 'info',
        icon: Coffee,
        title: 'Gasto diario promedio',
        message: `Gastas $${analysis.avgDailyExpense.toFixed(2)} por día. Proyección mensual: $${monthlyProjection.toFixed(2)}`,
        priority: 'low'
      });
    }

    // Consejo de ahorro inteligente
    if (analysis.balance > 0 && analysis.transactionCount > 5) {
      const savingsGoal = analysis.totalIncome * 0.3;
      if (analysis.balance < savingsGoal) {
        advice.push({
          type: 'info',
          icon: Lightbulb,
          title: 'Tip de ahorro',
          message: `Intenta ahorrar $${(savingsGoal - analysis.balance).toFixed(2)} más para llegar al 30% de tus ingresos.`,
          priority: 'low'
        });
      }
    }

    // Consejo sobre número de transacciones
    if (analysis.transactionCount < 3) {
      advice.push({
        type: 'info',
        icon: TrendingUp,
        title: 'Registra más transacciones',
        message: 'Mientras más datos tengas, mejores consejos podré darte. Registra todas tus transacciones.',
        priority: 'low'
      });
    }

    // Ordenar por prioridad
    return advice.sort((a, b) => {
      const priority = { high: 0, medium: 1, low: 2 };
      return priority[a.priority] - priority[b.priority];
    });
  };

  const adviceList = generateAdvice();

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'border-[#059669] bg-[#059669]/10';
      case 'warning': return 'border-yellow-600 bg-yellow-600/10';
      case 'danger': return 'border-red-600 bg-red-600/10';
      default: return 'border-[#047857] bg-[#047857]/10';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-[#059669]';
      case 'warning': return 'text-yellow-500';
      case 'danger': return 'text-red-500';
      default: return 'text-[#047857]';
    }
  };

  return (
    <Card className="bg-black/80 backdrop-blur-sm border-[#059669]/30 p-6 hover:border-[#059669] transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-[#059669]/20 rounded-lg flex items-center justify-center">
          <Brain className="h-6 w-6 text-[#059669] animate-pulse" />
        </div>
        <div>
          <h3 className="text-[#059669]">Asistente Financiero IA</h3>
          <p className="text-[#047857] text-sm">Análisis inteligente de tus finanzas</p>
        </div>
      </div>

      <div className="space-y-4">
        {adviceList.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              className={`p-4 rounded-lg border-2 ${getTypeColor(item.type)} transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-3">
                <Icon className={`h-5 w-5 mt-0.5 ${getIconColor(item.type)}`} />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className={`${getIconColor(item.type)}`}>
                      {item.title}
                    </h4>
                    {item.priority === 'high' && (
                      <Badge variant="destructive" className="text-xs">Urgente</Badge>
                    )}
                  </div>
                  <p className="text-[#047857] text-sm">{item.message}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {transactions.length > 0 && (
        <motion.div
          className="mt-6 p-4 bg-[#059669]/5 border border-[#059669]/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-[#047857] text-sm text-center">
            💡 Este análisis se actualiza automáticamente con cada transacción
          </p>
        </motion.div>
      )}
    </Card>
  );
}
