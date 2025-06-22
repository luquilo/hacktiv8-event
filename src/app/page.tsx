import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <main className="flex flex-col items-center justify-center mt-24">
        <h1 className="max-w-2xl px-16 my-12 text-2xl font-bold md:text-3xl lg:text-4xl lg:mx-auto lg:text-center 2xl:text-5xl 2xl:max-w-4xl">
          Lihat daftar event terbaru{" "}
          <span className="text-[#f49332]">Hacktiv8</span> dan konfrimasi
          kehadiranmu dalam hitungan detik!
        </h1>
        <Link
          href="/events"
          className="bg-[#f49332] hover:bg-[#db7f29] cursor-pointer p-3 text-white w-xs font-semibold rounded-full text-center"
        >
          jelajahi event
        </Link>
      </main>
      <footer className="fixed bottom-0 left-0 w-full p-3 md:p-6">
        <p className="text-[11px] text-center text-gray-500 leading-snug md:text-xs">
          This project is an unofficial website for personal/educational use.
          Event images and logos are sourced from Hacktiv8&apos;s public
          Instagram account and public Google search results for demonstration
          purposes only.
        </p>
      </footer>
    </div>
  );
}
