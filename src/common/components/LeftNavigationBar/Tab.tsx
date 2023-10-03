import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Tab = React.memo(
  ({
    label,
    value,
    icon,
  }: {
    label: string;
    value: string;
    icon: React.ReactElement;
  }) => {
    const pathname = usePathname();

    const isActiveTab = React.useCallback(
      (path: string) => {
        return path === pathname;
      },
      [pathname]
    );

    return (
      <Link
        key={value}
        className={isActiveTab(value) ? activeTabStyle : inactiveTabStyle}
        href={value}
      >
        {icon}
        {label}
      </Link>
    );
  }
);

Tab.displayName = "Tab";

const activeTabStyle =
  "flex items-center gap-3 rounded-lg bg-zinc-100 px-3 py-2 text-zinc-900 transition-all hover:text-zinc-900 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:text-zinc-50";

const inactiveTabStyle =
  "flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-500 transition-all hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50";
