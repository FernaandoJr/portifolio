function copyEmail() {
  var email = document.getElementById("email").innerHTML;
  navigator.clipboard.writeText(email);
  var msg = "E-mail Copiado com sucesso!";
  console.log(email);

  var span = document.getElementById("email");

  span.dataset.content = msg;

  console.log(span);

  console.log(span.dataset.content);
  setTimeout(() => {
    span.setAttribute("data-content", msg);

    var spanBefore = window.getComputedStyle(span, "::before");
    console.log(spanBefore.fontSize);

    // One liner function:
    const addCSS = (css) =>
      (document.head.appendChild(document.createElement("style")).innerHTML =
        css);

    // Usage:
    addCSS("p#email::before{ margin-bottom: 10px; }");

    console.log("dados inseridos");
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
