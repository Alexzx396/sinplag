// document.addEventListener("DOMContentLoaded", () => {
//     const path = window.location.pathname;
  
//     const replacements = {
//       "index.html": "",
//       "servicios.html": "servicios/",
//       "nosotros.html": "nosotros/",
//       "contacto.html": "contacto/"
//     };
  
//     for (const [htmlFile, cleanPath] of Object.entries(replacements)) {
//       if (path.endsWith(htmlFile)) {
//         const newUrl = path.replace(htmlFile, cleanPath);
//         history.replaceState(null, "", newUrl);
//         break;
//       }
//     }
//   });
  