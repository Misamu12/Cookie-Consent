function checkCookieConsent() {
  return localStorage.getItem("cookieConsent") === "true";
}

//
function voirCookiePopup() {
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "flex";
}

function accepteCookies() {
  localStorage.setItem("cookieConsent", "true");
  const popup = document.getElementById("cookie-popup");
  popup.style.display = "none";
}


document
  .getElementById("accept-cookies")
  .addEventListener("click", accepteCookies);

if (!checkCookieConsent()) {
  voirCookiePopup();
}
