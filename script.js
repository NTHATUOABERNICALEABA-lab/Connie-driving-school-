function sendMessage(e) {
  e.preventDefault();

  let name = document.querySelector("input[type=text]").value;

  let message = "Hello, my name is " + name + ". I would like to book a driving lesson.";

  let phone = "26656637211";

  window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(message));
}