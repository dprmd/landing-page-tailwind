/* eslint-disable react/prop-types */

export default function AboutMe({ setShowMessageBoxMabar }) {
  return (
    <div className="w-full px-4 md:w-1/2">
      <h2 className="title-desc text-secondary dark:text-secondaryMuda">
        Tentang Saya
      </h2>
      <h2 className="text-xl md:text-2xl font-bold mb-3 dark:text-light">
        Sedikit Perkenalan
      </h2>
      <p className="desc">
        Saya adalah seorang siswa SMK yang saat ini sudah memasuki semester
        terakhir di kelas <span className="font-bold">XII</span> jurusan{" "}
        <span className="font-bold ">Teknik Komputer Jaringan</span>. saat ini
        saya sedang belajar front end web dev diseling bermain mobile legends di
        kesehariannya. kalau mau mabar sini aja, btw gw all role yah.
      </p>

      <button
        className="text-base font-semibold bg-secondary hover:bg-secondaryMuda dark:bg-secondaryMuda dark:hover:bg-secondary px-6 py-2.5 rounded-lg text-white hover:rounded-[30px] active:rounded-[30px] block w-max my-4 mabar transition-all duration-500"
        onClick={setShowMessageBoxMabar}
      >
        Hayyuk Mabar ML
      </button>
    </div>
  );
}
