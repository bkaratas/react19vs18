'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4 text-center tracking-tight">
        🚀 React 18 vs React 19 Demo
      </h1>
      <p className="text-gray-600 text-lg mb-10 max-w-2xl text-center">
        React 19 ile gelen <code className="font-semibold text-gray-800">useActionState</code>, <code className="font-semibold text-gray-800">useFormStatus</code>, <code className="font-semibold text-gray-800">useOptimistic</code> ve <code className="font-semibold text-gray-800">useTransition</code> hook’larını React 18’in klasik yöntemleriyle karşılaştırın.
      </p>

      <div className="w-full max-w-4xl grid sm:grid-cols-3 gap-6">
        <Link
          href="/legacy"
          className="block bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition p-6 text-center"
        >
          <h2 className="text-lg font-semibold text-gray-800 mb-1">🧩 React 18</h2>
          <p className="text-gray-600 text-sm">Klasik form yaklaşımı</p>
        </Link>

        <Link
          href="/compare"
          className="block bg-black text-white rounded-2xl shadow hover:bg-gray-900 transition p-6 text-center"
        >
          <h2 className="text-lg font-semibold mb-1">🔍 Karşılaştır</h2>
          <p className="text-sm">Yan yana görünüm</p>
        </Link>

        <Link
          href="/modern"
          className="block bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition p-6 text-center"
        >
          <h2 className="text-lg font-semibold mb-1">⚡ React 19</h2>
          <p className="text-sm">Yeni nesil form özellikleri</p>
        </Link>

        
      </div>

    </main>
  );
}
