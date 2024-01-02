export default function Contact() {
  return (
    <section id="contact" className="scroll-smooth">
      <div className="w-full dark:bg-gradient-to-bl from-darkGradient to-darkBg">
        <div className="container mx-auto pt-24 pb-20 border-b border-b-slate-300 dark:border-none">

          <div className="px-4">
            <h2 className="title-desc text-lima text-center dark:text-limaMuda">Contact Saya</h2>
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-center dark:text-light">Hubungi Saya</h3>
            <p className="desc text-center mb-40">
              Jika kamu punya kritik dan saran dalam pengembangan website ini, silakan hubungi saya melalui form di bawah.
            </p>
          </div>

          <div className="md:w-[70%] lg:w-1/2 p-2 rounded-xl mx-4 md:mx-auto">
            <form className="">

              <div className="py-2 flex flex-col px-4">
                <label htmlFor="nama" className="font-semibold text-lg text-lima dark:text-limaMuda mb-1">Nama</label>
                <input type="text" name="nama" id="nama" className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda" />
              </div>

              <div className="py-2 flex flex-col px-4">
                <label htmlFor="email" className="font-semibold text-lg text-lima dark:text-limaMuda mb-1">Email</label>
                <input type="email" name="email" id="email" className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda" />
              </div>

              <div className="py-2 flex flex-col px-4">
                <label htmlFor="pesan" className="font-semibold text-lg text-lima dark:text-limaMuda mb-1">Pesan</label>
                <textarea name="pesan" id="pesan" rows="5" className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda"></textarea>
              </div>

              <div className="py-2 px-4 mt-2">
                <button type="button" className="font-bold text-md md:text-lg w-full py-3 rounded-full hover:bg-limaMuda dark:hover:bg-lima text-light bg-lima dark:bg-limaMuda transition duration-300">Kirim</button>
              </div>
            </form>
          </div>

          </div>
      </div>
    </section>
  )
}