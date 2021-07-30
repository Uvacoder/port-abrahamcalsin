import Link from "next/link";
import MainLayout from "../components/layout";

const custom404 = () => {
  return (
    <MainLayout>
      <title>404 Error!</title>
      <div className="flex flex-col justify-center items-center text-size-8.3-desk text-center mx-auto mb-25 mt-5 sm:my-35 sm:text-size-8.2-desk font-black">
        <h1>404</h1>
        <p>Página No Encontrada</p>
        <Link href="/">
          <a className="bg-clrOption-2 w-36.1-desk text-size-5 rounded-rds-1.1 shadow-sm py-4 px-6 mt-6 hover:opacity-80 sm:w-36.3-desk sm:text-size-6">
            {" "}
            Volver a Inicio
          </a>
        </Link>
      </div>
    </MainLayout>
  );
};
export default custom404;
