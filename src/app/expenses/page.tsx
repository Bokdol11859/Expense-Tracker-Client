import { Expense } from "@/app/expenses/components/Expense";
import expenses_ from "@/expense.json";

export type Expense = {
  id: string;
  date: Date;
  description: string;
  amount: number;
};

export default function Page() {
  const expenses = expenses_.map((expense) => {
    return {
      ...expense,
      date: new Date(expense.date),
    };
  });

  return <Expense expenses={expenses} />;
}
