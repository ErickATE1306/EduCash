import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, DollarSign, TrendingUp, TrendingDown, Calendar, Tag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';

interface TransactionFormProps {
  onAddTransaction: (transaction: {
    type: 'income' | 'expense';
    amount: number;
    category: string;
    description: string;
    date: string;
  }) => void;
}

const expenseCategories = [
  'Alimentación', 'Transporte', 'Educación', 'Entretenimiento', 
  'Salud', 'Vivienda', 'Otros'
];

const incomeCategories = [
  'Salario', 'Beca', 'Freelance', 'Mesada', 'Inversiones', 'Otros'
];

export function TransactionForm({ onAddTransaction }: TransactionFormProps) {
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!amount || !category || !description) {
      return;
    }

    onAddTransaction({
      type,
      amount: parseFloat(amount),
      category,
      description,
      date: new Date().toISOString(),
    });

    // Reset form
    setAmount('');
    setCategory('');
    setDescription('');
  };

  const categories = type === 'income' ? incomeCategories : expenseCategories;

  return (
    <Card className="bg-black/80 backdrop-blur-sm border-[#059669]/30 p-6 hover:border-[#059669] transition-all duration-300">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <h3 className="text-[#059669] mb-4 flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Registrar Transacción
          </h3>
        </div>

        {/* Type Selector */}
        <div className="grid grid-cols-2 gap-3">
          <motion.button
            type="button"
            onClick={() => setType('income')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              type === 'income'
                ? 'border-[#059669] bg-[#059669]/20'
                : 'border-[#059669]/30 bg-black/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <TrendingUp className={`h-6 w-6 mx-auto mb-2 ${
              type === 'income' ? 'text-[#059669]' : 'text-[#047857]'
            }`} />
            <span className={type === 'income' ? 'text-[#059669]' : 'text-[#047857]'}>
              Ingreso
            </span>
          </motion.button>

          <motion.button
            type="button"
            onClick={() => setType('expense')}
            className={`p-4 rounded-lg border-2 transition-all duration-300 ${
              type === 'expense'
                ? 'border-[#059669] bg-[#059669]/20'
                : 'border-[#059669]/30 bg-black/50'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <TrendingDown className={`h-6 w-6 mx-auto mb-2 ${
              type === 'expense' ? 'text-[#059669]' : 'text-[#047857]'
            }`} />
            <span className={type === 'expense' ? 'text-[#059669]' : 'text-[#047857]'}>
              Gasto
            </span>
          </motion.button>
        </div>

        {/* Amount Input */}
        <div className="space-y-2">
          <Label className="text-[#047857] flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Monto
          </Label>
          <Input
            type="number"
            step="0.01"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-[#0a0e0a] border-[#059669]/30 text-[#059669] placeholder:text-[#047857]/50 focus:border-[#059669]"
            required
          />
        </div>

        {/* Category Select */}
        <div className="space-y-2">
          <Label className="text-[#047857] flex items-center gap-2">
            <Tag className="h-4 w-4" />
            Categoría
          </Label>
          <Select value={category} onValueChange={setCategory} required>
            <SelectTrigger className="bg-[#0a0e0a] border-[#059669]/30 text-[#059669] focus:border-[#059669]">
              <SelectValue placeholder="Selecciona una categoría" />
            </SelectTrigger>
            <SelectContent className="bg-[#0a0e0a] border-[#059669]/30">
              {categories.map((cat) => (
                <SelectItem 
                  key={cat} 
                  value={cat}
                  className="text-[#059669] focus:bg-[#059669]/20 focus:text-[#059669]"
                >
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Description Input */}
        <div className="space-y-2">
          <Label className="text-[#047857]">Descripción</Label>
          <Input
            type="text"
            placeholder="Ej: Almuerzo universitario"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="bg-[#0a0e0a] border-[#059669]/30 text-[#059669] placeholder:text-[#047857]/50 focus:border-[#059669]"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#059669] text-black hover:bg-[#047857] shadow-[0_0_20px_rgba(5,150,105,0.5)] hover:shadow-[0_0_30px_rgba(5,150,105,0.8)] transition-all duration-300"
        >
          <Plus className="mr-2 h-4 w-4" />
          Agregar Transacción
        </Button>
      </form>
    </Card>
  );
}
