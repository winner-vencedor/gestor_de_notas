"use client";

import {
  GraduationCap,
  Home,
  BookOpen,
  ClipboardList,
  BarChart3,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Instituições", href: "/dashboard/institutions", icon: BookOpen },
    { name: "Avaliações", href: "/dashboard/avaliacoes", icon: ClipboardList },
    { name: "Médias", href: "/dashboard/medias", icon: BarChart3 },
    { name: "Configurações", href: "/dashboard/configuracoes", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "flex flex-col h-screen bg-linear-to-b from-orange-50 to-white border-r border-orange-100 shadow-sm transition-all duration-300 ease-in-out",
        collapsed ? "w-20" : "w-64",
      )}
    >
      {/* Cabeçalho / Logo */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-orange-100">
        <div className="flex items-center gap-2 text-orange-600">
          <GraduationCap className="size-6" />
          {!collapsed && (
            <h1 className="font-bold text-lg tracking-tight">
              Gestor de Notas
            </h1>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-orange-600 hover:bg-orange-100"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu className="size-5" />
        </Button>
      </div>

      {/* Navegação */}
      <nav className="flex-1 overflow-y-auto px-3 mt-6">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    "group flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-orange-100 text-orange-700 shadow-sm"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600",
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  {!collapsed && (
                    <span className="truncate group-hover:translate-x-0.5 transition-transform">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Perfil / Rodapé */}
      <div className="border-t border-orange-100 p-4">
        <div
          className={cn(
            "flex items-center gap-3 transition-all",
            collapsed ? "justify-center" : "",
          )}
        >
          <Avatar className="size-8 bg-primary">
            <AvatarImage src="/avatar-placeholder.png" alt="Usuário" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>

          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800 truncate">
                Ana Nogueira
              </p>
              <p className="text-xs text-gray-500 truncate">
                ana.nogueira@email.com
              </p>
            </div>
          )}

          {!collapsed && (
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-500 hover:text-orange-600"
              onClick={() => console.log("Logout")}
            >
              <LogOut className="size-4" />
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
}
