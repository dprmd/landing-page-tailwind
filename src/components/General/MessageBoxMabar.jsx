/* eslint-disable react/prop-types */

export default function MessageBoxMabar({ showMessageBoxMabar, setShowMessageBoxMabar }) {
  return (
    <div className={
      "message-bg " +
      `${showMessageBoxMabar ? "flex" : "hidden"}`
      }>
      <div className="message-box">
        <div className="message">
          <h3 className="text-lg font-bold">Hayyuk Mabar ML</h3> <br />
          <p className="text-md font-medium">ID : 490245606</p>
          <p className="text-md font-medium">USERNAME : Arumijen</p>
        </div>
        <div className="flex justify-center gap-x-2">
          <button
            className="message-ok bg-primary text-light font-bold  text-lg px-6 py-2 rounded-lg hover:bg-primaryMuda dark:bg-primaryMuda dark:hover:bg-primary transition duration-500"
            onClick={setShowMessageBoxMabar}
          >
            Baiklah
          </button>
        </div>
      </div>
    </div>
  );
}
