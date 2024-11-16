import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-6 justify-center items-center min-h-screen bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-75"
        style={{ backgroundImage: "url('/react.png')" }}
      ></div>
      <div className="relative z-10">
        <div className="flex flex-col gap-5 mb-5">
          <h1
            className="text-2xl mt-3 sm:mt-4 md:text-3xl md:mt-5 lg:text-4xl lg:mt-6 font-extrabold bg-clip-text
        text-transparent bg-gradient-to-r from-pink-400 to-red-600 drop-shadow-lg"
          >
            実際にReactアプリを作りながら学ぶ！
          </h1>
          <h2 className="text-xl lg:text-2xl font-bold text-gray-100 mb-3 italic">
            初学者用学習ツール
          </h2>
          <p className="text-xl font-bold text-slate-100 mb-2 italic">
            Skills: Next.js, TypeScript, Tailwind CSS
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl p-4 mb-10">
          <Link href="/count-updown">
            <div
              className="border-2 border-gray-500 rounded-lg bg-sky-200 hover:bg-sky-300
      px-6 py-4 text-center shadow-lg transition-colors duration-300 cursor-pointer"
            >
              1 Count Up&Down
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
