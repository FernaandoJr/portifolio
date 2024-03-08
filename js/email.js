function copyEmail() {
  var email = document.getElementById("email").innerHTML;
  navigator.clipboard.writeText(email);
  var msg = "E-mail Copiado com sucesso!";


  var span = document.getElementById("email");

  span.dataset.content = msg;
  setTimeout(() => {
    span.setAttribute("data-content", msg);
    var spanBefore = window.getComputedStyle(span, "::before");

    // One liner function:
    const addCSS = (css) =>
      (document.head.appendChild(document.createElement("style")).innerHTML =
        css);

    // Usage:
    addCSS("p#email::before{ margin-bottom: 10px; }");
  });

  setTimeout(() => {
    span.setAttribute("data-content", "");
    const addCSS = (css) =>
      (document.head.appendChild(document.createElement("style")).innerHTML =
        css);

    // Usage:
    addCSS("p#email::before{ margin-bottom: 0; }");
  }, 1500);
}
