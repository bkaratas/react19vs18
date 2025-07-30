import LegacyFeedbackForm from '../components/LegacyFeedbackForm';

export default function LegacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          🚀 React 18 Yaklaşımı (Legacy)
        </h1>

        <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Ne Anlatıyor?</h2>
          <p className="text-gray-700">
            Bu sayfa, React 18 dönemindeki klasik form yönetimi yöntemlerini inceler.
            <br />
            Özellikle <code>useState</code> + <code>onSubmit</code> ile form kontrolüne odaklanır.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">📝 Form Örneği</h3>

          {/* Legacy form bileşeni buraya gelecek */}
          <LegacyFeedbackForm />
        </div>
      </div>
    </div>
  );
}

