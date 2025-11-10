export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex flex-col items-center justify-center gap-8 px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-6xl font-bold text-gray-800 dark:text-white">
            مرحباً بك يا تركي 👋
          </h1>

          <p className="text-2xl text-gray-600 dark:text-gray-300">
            أهلاً وسهلاً في مشروع Next.js الجديد
          </p>

          <div className="flex flex-col gap-4 mt-8">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                🚀 التطبيق جاهز للعمل
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                تم إنشاء المشروع باستخدام Next.js 16 و TypeScript و Tailwind CSS
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                📝 البدء في التطوير
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                يمكنك البدء بتعديل ملف <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">app/page.tsx</code>
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                🎨 تصميم عربي
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                التطبيق مُصمم ليدعم اللغة العربية بشكل كامل
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-8 justify-center">
            <a
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              📚 الوثائق
            </a>
            <a
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            >
              📖 التعلم
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
