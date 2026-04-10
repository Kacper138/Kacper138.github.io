const token = "podwika";
const haslo = "podwika";

if (window.location.hash === "#" + token) {
  sessionStorage.setItem("cv_access", "true");
}

if (sessionStorage.getItem("cv_access") !== "true") {
 const wpisane = prompt("Podaj hasło lub poproś o dostęp twórcę strony:");
 if (wpisane !== haslo) {
    document.location.replace("index.html");
 } else {
   sessionStorage.setItem("cv_access", "true");
 }
}