import Link from "next/link";

const Footer = () => {
  return (
    <div className="mb-30 mx-auto w-full max-w-70 px-7 sm:px-15">
      <div className="block sm:flex sm:px-10 sm:justify-between text-center items-center border-t-2/1 border-primary-500 pb-0 pt-7 text-xs sm:text-sm sm:pt-10">
        <p>
          {"{"}Developed by
          <span className="font-bold"> ©Abraham Calsin{"}"}</span>
        </p>
        <p className="mt-2-6 flex justify-center">
          With Next.js and Tailwind.{" "}
          <img src="/icons/heart_icon.svg" alt="❤" className="w-5 ml-2-8 block" />
        </p>
      </div>
    </div>
  );
};
export default Footer;
