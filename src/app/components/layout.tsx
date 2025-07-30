import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 text-gray-800">
      <header className="p-6 text-center shadow-md bg-white/60 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
          React 18 vs React 19 Demo
        </h1>
        <p className="text-sm text-gray-500">
          Modern Form API'lerinin kıyaslamalı gösterimi
        </p>
      </header>
      <main className="max-w-6xl mx-auto p-6">{children}</main>
      <footer className="text-center p-4 text-xs text-gray-400">
        © 2025 React 18 vs 19 Showcase
      </footer>
    </div>
  );
}
