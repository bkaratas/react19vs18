""// app/compare/page.tsx veya pages/compare.tsx

import LegacyFeedbackForm from "../components/LegacyFeedbackForm";
import ModernFeedbackForm from "../components/ModernFeedbackForm";

export default function ComparePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">
            React 18 vs React 19 Karşılaştırması
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Bu demo, form gönderme işlemini React 18 ve React 19'un farklı yaklaşımlarıyla nasıl yönettiğimizi yan yana gösterir.
          </p>
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
            🔁 useTransition · ✅ useActionState · ⏱️ useFormStatus
          </span>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            🎯 Odak Noktası
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Kullanıcılar bu sayfada React 18’in klasik form yaklaşımıyla React 19’un modern form işleme yetenekleri arasındaki farkları gözlemlemelidir. Özellikle <code>useActionState</code>, <code>useTransition</code> ve <code>useFormStatus</code> gibi hook'ların sunduğu kullanıcı deneyimi avantajlarına dikkat edilmelidir.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* React 18 Box */}
          <div className="bg-white border shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              React 18 Yaklaşımı
            </h2>
            <p className="text-gray-500 text-sm">
              Klasik form mantığı ile, durum yönetimi olmadan form submit edilir ve sayfa yeniden render edilir.
            </p>
            <LegacyFeedbackForm />
          </div>

          {/* React 19 Box */}
          <div className="bg-white border shadow-lg rounded-xl p-6 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              React 19 Yaklaşımı
            </h2>
            <p className="text-gray-500 text-sm">
              Yeni hook'lar sayesinde form gönderimi yönlendirme veya optimistik güncellemeyle anlık yapılır.
            </p>
            <ModernFeedbackForm />
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            📊 React 18 vs React 19 Hook Karşılaştırması
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border rounded-lg shadow-md overflow-hidden">
              <thead className="bg-blue-100 text-blue-800">
                <tr>
                  <th className="px-4 py-2">Özellik</th>
                  <th className="px-4 py-2">React 18</th>
                  <th className="px-4 py-2">React 19</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Form Gönderimi</td>
                  <td className="px-4 py-3">Sayfa yeniden render edilir</td>
                  <td className="px-4 py-3">Optimistik güncellemeyle anında UI</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Durum Yönetimi</td>
                  <td className="px-4 py-3">Manuel yapılmalı</td>
                  <td className="px-4 py-3">useActionState ile entegre</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Yüklenme Göstergesi</td>
                  <td className="px-4 py-3">Extra state ile kontrol</td>
                  <td className="px-4 py-3">useFormStatus ile kolay</td>
                </tr>
                <tr className="border-t">
                  <td className="px-4 py-3 font-medium">Kullanıcı Deneyimi</td>
                  <td className="px-4 py-3">Klasik, yavaş yanıtlı</td>
                  <td className="px-4 py-3">Hızlı ve akıcı</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}