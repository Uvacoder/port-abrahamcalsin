import Navbar from "../navbar/index";
import Footer from "../footer/index";
import Head from "next/head";

const MainLayout = (props) => (
  <div className="font-montserrat text-clrPrimary">
    <Head>
      <meta charset="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />
      <meta data-react-helmet="true" name="robots" content="index,follow" />
      <meta data-react-helmet="true" name="googlebot" content="index,follow" />
      <meta
        data-react-helmet="true"
        name="description"
        content="Maquetador Web, creador de proyectos de código abierto, escribiendo en HTML, JavaScript, CSS, Sass,
          Tailwind, Bootstrap."
      />
      <meta
        data-react-helmet="true"
        name="image"
        content="https://avatars.githubusercontent.com/u/77748010?v=4"
      />
      <meta data-react-helmet="true" property="og:url" content="https://www.abrahamcalsin.com" />
      <meta data-react-helmet="true" property="og:type" content="website" />
      <meta data-react-helmet="true" property="og:title" content="Abraham Calsin" />
      <meta
        data-react-helmet="true"
        property="og:description"
        content="Maquetador Web, creador de proyectos de código abierto, escribiendo en HTML, JavaScript, CSS, Sass,
          Tailwind, Bootstrap."
      />
      <meta
        data-react-helmet="true"
        property="og:image"
        content="https://avatars.githubusercontent.com/u/77748010?v=4"
      />
      <meta data-react-helmet="true" name="twitter:card" content="summary_large_image" />
      <meta data-react-helmet="true" name="twitter:creator" content="@abraham_calsin" />
      <meta
        data-react-helmet="true"
        name="twitter:title"
        content="Abraham Calsin - Maquetador Web"
      />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content="Maquetador Web, creador de proyectos de código abierto, escribiendo en HTML, JavaScript, CSS, Sass,
          Tailwind, Bootstrap."
      />
      <meta
        data-react-helmet="true"
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/77748010?v=4"
      />
    </Head>
    <Navbar />
    <main className="mx-auto max-w-70 sm:py-10 px-7 sm:px-15 pt-35">{props.children}</main>
    <Footer />
  </div>
);
export default MainLayout;
