import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight, Trash2, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  description: string;
  date: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onDeleteTransaction: (id: string) => void;
}

export function TransactionList({ transactions, onDeleteTransaction }: TransactionListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return 'Hoy';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Ayer';
    } else {
      return date.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' });
    }
  };

  const sortedTransactions = [...transactions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <Card className="bg-black/80 backdrop-blur-sm border-[#059669]/30 p-6 hover:border-[#059669] transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[#059669]">Historial de Transacciones</h3>
        <span className="text-[#047857] text-sm">{transactions.length} transacciones</span>
      </div>

      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-3">
          {sortedTransactions.length === 0 ? (
            <div className="text-center py-12 text-[#047857]">
              <p>No hay transacciones registradas</p>
              <p className="text-sm mt-2">Comienza agregando tu primera transacción</p>
            </div>
          ) : (
            sortedTransactions.map((transaction, index) => (
              <motion.div
                key={transaction.id}
                className="group relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex items-center justify-between p-4 bg-[#0a0e0a] rounded-lg border border-[#059669]/20 hover:border-[#059669] transition-all duration-300">
                  <div className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.type === 'income'
                          ? 'bg-[#059669]/20'
                          : 'bg-red-500/20'
                      }`}
                    >
                      {transaction.type === 'income' ? (
                        <ArrowUpRight className="h-5 w-5 text-[#059669]" />
                      ) : (
                        <ArrowDownRight className="h-5 w-5 text-red-500" />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-[#059669]">{transaction.description}</p>
                        <span className="text-xs px-2 py-0.5 bg-[#059669]/20 text-[#059669] rounded">
                          {transaction.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Calendar className="h-3 w-3 text-[#047857]" />
                        <p className="text-[#047857] text-xs">
                          {formatDate(transaction.date)}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <p
                      className={`text-lg ${
                        transaction.type === 'income' ? 'text-[#059669]' : 'text-red-500'
                      }`}
                    >
                      {transaction.type === 'income' ? '+' : '-'}$
                      {transaction.amount.toFixed(2)}
                    </p>

                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onDeleteTransaction(transaction.id)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-red-500 hover:text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </ScrollArea>
    </Card>
  );
}
