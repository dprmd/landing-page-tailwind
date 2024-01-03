export default function ContactForm() {
  return (
    <div className="md:w-[70%] lg:w-1/2 p-2 rounded-xl mx-4 md:mx-auto">
      <form className="">
        <div className="py-2 flex flex-col px-4">
          <label
            htmlFor="nama"
            className="font-semibold text-lg text-lima dark:text-limaMuda mb-1"
          >
            Nama
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda"
          />
        </div>

        <div className="py-2 flex flex-col px-4">
          <label
            htmlFor="email"
            className="font-semibold text-lg text-lima dark:text-limaMuda mb-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda"
          />
        </div>

        <div className="py-2 flex flex-col px-4">
          <label
            htmlFor="pesan"
            className="font-semibold text-lg text-lima dark:text-limaMuda mb-1"
          >
            Pesan
          </label>
          <textarea
            name="pesan"
            id="pesan"
            rows="5"
            className="outline-none rounded-md bg-lima bg-opacity-30 focus:ring-2 focus:ring-lima px-3 py-2 dark:bg-lima dark:bg-opacity-30 dark:text-light dark:ring-limaMuda"
          ></textarea>
        </div>

        <div className="py-2 px-4 mt-2">
          <button
            type="button"
            className="font-bold text-md md:text-lg w-full py-3 rounded-full hover:bg-limaMuda dark:hover:bg-lima text-light bg-lima dark:bg-limaMuda transition duration-300"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
}
