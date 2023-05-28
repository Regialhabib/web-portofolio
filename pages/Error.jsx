import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <>
      <div className="w-full max-w-5xl h-screen flex justify-center items-center lg:mx-auto">
        <div className="text-center flex flex-col items-center justify-center gap-3">
          <h1 className="text-6xl font-bold text-red-600">Ooops!</h1>
          <h3 className="font-bold text-lg dark:text-gray-50">PAGE - 404 NOT FOUND</h3>
          <div className="mx-3 md:mx-0 font-medium dark:text-gray-50">
            <p>Halaman yang anda cari tidak ditemukan, sabar ya hehehe</p>
            <p>
              Silahkan klik tombol di bawah ini untuk kembali ke halaman utama
            </p>
          </div>
          <Link to="/">
            <button className="px-4 font-semibold py-2 bg-red-600 text-white rounded-full">
             Go To Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
