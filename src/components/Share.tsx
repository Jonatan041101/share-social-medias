import { useEffect, useState } from "react";
// import "./Share.css";

import Helmet from "react-helmet";

declare const FB: {
  init: any;
  ui: any;
};

function Share() {
  const [avatar, setAvatar] = useState<string>(
    `https://api.multiavatar.com/${Date.now()}.svg`
  );
  useEffect(() => {
    function init() {
      window.fbAsyncInit = function () {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        FB.init({
          appId: "379573221399993",
          xfbml: true,
          version: "v18.0",
        });
      };
    }
    document.addEventListener("DOMContentLoaded", init);

    // Código de limpieza para quitar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("DOMContentLoaded", init);
    };
  }, []);
  function share() {
    console.log("HOLA MUNDO");

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    FB.ui(
      {
        method: "share",
        href: "https://stackoverflow.com/questions/62581079/dynamic-opengraph-tags-for-spa-react-application/75234916#75234916",
        // quote: "Este es el título que quieres compartir", // Título
        // hashtag: "#MiHashtag", // Hashtag opcional
        // redirect_uri: "https://tu-url-de-redireccion.com", // URL de redirección opcional
        // picture: "https://enlace-de-la-imagen.com", // Enlace de la imagen
        // description: "Esta es la descripción que quieres compartir", // Descripción
      },
      function (response) {
        console.log(response, "response");
      }
    );
  }
  return (
    <>
      Share on:
      <Helmet>
        <title>HELMET</title>
        {/* <meta
          property="og:url"
          content="https://share-social-medias-4odn.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tap4Change" />
        <meta property="og:description" content="Tap4Change description" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/damjxqb5f/image/upload/v1704225504/avatar_7_ftmrh8.png"
        /> */}
      </Helmet>
      <button
        onClick={() => {
          setAvatar(`https://api.multiavatar.com/${Date.now()}.svg`);
        }}
      ></button>
      <h1>esta es la pagina del home</h1>
      <button onClick={share}></button>
    </>
  );
}

export default Share;
