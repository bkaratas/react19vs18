"use client";

import ModernFeedbackForm from "../components/ModernFeedbackForm";

export default function ModernPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          ✨ React 19 Form Özellikleri
        </h1>

        {/* Giriş Bilgi Kartı */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 mb-10">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            React 19’un Yeni Hook’ları
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Bu sayfada <code>useFormStatus</code>, <code>useOptimistic</code> ve{" "}
            <code>useActionState</code> gibi React 19 hook’larıyla form
            deneyimini nasıl iyileştirebileceğinizi gösteriyoruz.
          </p>
        </div>

        {/* Bilgi Kutuları */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* useActionState */}
          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              🧠 useActionState
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Form işlemleri sırasında action sonucu dönen state’i kontrol
              etmeye yarar. Sunucu yanıtlarını yakalayıp kullanıcıya
              gösterilebilir.
            </p>
          </div>

          {/* useFormStatus */}
          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              📥 useFormStatus
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Form submit edilirken pending durumunu (yükleniyor) gösterir.
              Submit butonlarını bu hook ile yönlendirebilirsin.
            </p>
          </div>

          {/* useOptimistic */}
          <div className="bg-white border border-blue-100 rounded-2xl p-5 shadow hover:shadow-lg transition-all">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              ⚡ useOptimistic
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Kullanıcının yaptığı işlemleri sunucuya gitmeden önce UI’da geçici
              olarak yansıtmanı sağlar. Hızlı ve akıcı deneyim sunar.
            </p>
          </div>
        </div>

        {/* Form */}
        <ModernFeedbackForm />
      </div>
    </div>
  );
}
