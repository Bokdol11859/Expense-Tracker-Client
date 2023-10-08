import { AlertDialog } from "@/common/components/ui/alert-dialog";
import { ExpenseHeader } from "./ExpenseHeader";
import { ExpenseTable } from "./ExpenseTable";
import { ExpenseAddAlert } from "./ExpenseAddAlert";
import { Dialog } from "@/common/components/ui/dialog";

export function Expense() {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
      <Dialog>
        <ExpenseHeader />
        <ExpenseTable />
        <ExpenseAddAlert />
      </Dialog>
    </main>
  );
}
