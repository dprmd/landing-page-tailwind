export default function SelfPictureBloob() {
  return (
    <div className="w-full md:mt-5 md:w-1/3 pt-10 md:pt-0 overflow-y-hidden dark:bg-darkBgMuda dark:bg-opacity-5 z-10">
      <div className="w-full relative overflow-hidden rounded-full">
        <img src="img/adi.png" className="mx-auto w-80" />
        <span className="absolute top-0 right-0 left-0 bottom-0 -z-10 -translate-y-10 sm:scale-75 sm:-translate-y-20  md:scale-110 md:translate-y-0">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0284c7"
              d="M35,-51.2C49.7,-45,69,-42.7,75,-33.2C81.1,-23.7,73.8,-7.1,70.4,9.5C67,26,67.5,42.5,59.7,52C51.9,61.6,35.8,64.2,20.8,66.7C5.8,69.2,-8,71.7,-21.2,69.2C-34.5,66.8,-47.2,59.3,-57.7,49C-68.3,38.7,-76.7,25.4,-81,10.3C-85.2,-4.8,-85.3,-21.9,-77.9,-34.5C-70.5,-47.1,-55.6,-55.2,-41.3,-61.7C-27.1,-68.1,-13.6,-73,-1.7,-70.3C10.1,-67.6,20.3,-57.4,35,-51.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#FF0066"
              d="M55.2,-42.4C60.7,-37.2,46.6,-14.9,38.6,4.1C30.5,23.1,28.4,38.8,18.2,47.3C8.1,55.8,-10,57.1,-26,50.7C-42,44.2,-56,30.1,-58.1,14.9C-60.3,-0.3,-50.8,-16.6,-39.2,-23.2C-27.5,-29.9,-13.8,-26.8,5.6,-31.2C24.9,-35.7,49.8,-47.6,55.2,-42.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </span>
        <span className="absolute top-1 right-1 left-1 bottom-1 -z-10">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#0ea5e9"
              d="M55.2,-42.4C60.7,-37.2,46.6,-14.9,38.6,4.1C30.5,23.1,28.4,38.8,18.2,47.3C8.1,55.8,-10,57.1,-26,50.7C-42,44.2,-56,30.1,-58.1,14.9C-60.3,-0.3,-50.8,-16.6,-39.2,-23.2C-27.5,-29.9,-13.8,-26.8,5.6,-31.2C24.9,-35.7,49.8,-47.6,55.2,-42.4Z"
              transform="translate(100 100)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}
