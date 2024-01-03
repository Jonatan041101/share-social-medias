declare global {
  interface Window {
    FB: {
      init: (params: {
        appId: string;
        xfbml: boolean;
        version: string;
      }) => void;
      // Aquí puedes agregar más métodos según sea necesario
    };
  }
}
