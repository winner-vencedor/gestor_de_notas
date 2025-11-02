"use client";

import { Bell, User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm px-6 py-3 border-b w-full">
      <h1 className="text-lg font-semibold text-orange-700">
        Painel Principal
      </h1>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 cursor-pointer hover:text-orange-600" />
        <div className="flex items-center gap-2 cursor-pointer">
          <User className="text-gray-600" />
          <span className="text-sm text-gray-700 font-medium">João</span>
        </div>
      </div>
    </div>
  );
}
