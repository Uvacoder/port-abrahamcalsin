import Link from "next/link";
import MainLayout from "../components/layout";

const custom404 = () => {
  return (
    <MainLayout>
      <title>404 Error!</title>
      <div className="flex flex-col justify-center items-center text-3xl text-center mx-auto mb-25 mt-5 sm:my-35 sm:text-sm-1.4 font-black">
        <h1>404</h1>
        <p>Página No Encontrada</p>
        <Link href="/">
          <a className="bg-secondary w-36.1-desk text-base rounded-rds-1.1 shadow-sm py-4 px-6 mt-6 hover:opacity-80 sm:w-36.3-desk sm:text-xsm-1.3">
            {" "}
            Volver a Inicio
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};
export default custom404;
