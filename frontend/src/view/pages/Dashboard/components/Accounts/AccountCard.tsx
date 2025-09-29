import type { BankAccount } from "../../../../../app/entities/BankAccount";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { BankAccountTypeIcon } from "../../../../../components/icons/BankAccountTypeIcon";
import { useDashboard } from "../DashboardContext/useDashboard";

interface AccountCardProps {
  data: BankAccount;
}

export function AccountCard({ data }: AccountCardProps) {
  const { color, name, currentBalance, type } = data;
  const { areValueVisible, openEditAccountModal } = useDashboard();

  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px]flex flex-col justify-between border-b-4 "
      style={{ borderColor: color }}
      role="button"
      onClick={() => openEditAccountModal(data)}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="mt-4 block text-gray-800 font-medium tracking-[-0.5px]">
          {name}
        </span>
      </div>

      <div>
        <span
          className={cn(
            "block text-gray-800 font-medium tracking-[-0.5px]",
            !areValueVisible && "blur-sm",
          )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <span className="text-gray-600 text-sm">Saldo Atual</span>
      </div>
    </div>
  );
}
