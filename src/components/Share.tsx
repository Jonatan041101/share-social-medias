import React, { useEffect } from "react";
// import "./Share.css";
import { FacebookShareButton, FacebookIcon } from "react-share";
interface ShareProps {
  description: string;
}
import Helmet from "react-helmet";
function Share({ description }: ShareProps) {
  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function () {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "379573221399993",
          xfbml: true,
          version: "v18.0",
        });
      };
    });

    // Código de limpieza para quitar el listener cuando el componente se desmonte
    return () => {
      document.removeEventListener("DOMContentLoaded", () => {});
    };
  }, []);
  function share() {
    console.log("HOLA MUNDO");
    FB.ui(
      {
        method: "share",
        href: "https://stackoverflow.com/questions/62581079/dynamic-opengraph-tags-for-spa-react-application/75234916#75234916",
        quote: "Este es el título que quieres compartir", // Título
        hashtag: "#MiHashtag", // Hashtag opcional
        redirect_uri: "https://tu-url-de-redireccion.com", // URL de redirección opcional
        picture: "https://enlace-de-la-imagen.com", // Enlace de la imagen
        description: "Esta es la descripción que quieres compartir", // Descripción
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
        <meta name="description" content="Home de la tienda" />
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="titulo para el home de la tienda" />
        <meta
          property="og:description"
          content="esta es la decripcion del home de la tienda"
        />
        <meta
          property="og:image"
          content="https://media.gettyimages.com/photos/bogota-at-sunset-picture-id107069344?s=612x612"
        />
      </Helmet>
      <h1>esta es la pagina del home</h1>
      <button onClick={share}></button>
    </>
  );
}

export default Share;
