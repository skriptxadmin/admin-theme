const formData = {
  name: "",
  email: "",
  message: "",
};

const form = document.getElementById("myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formData.name = document.getElementById("name").value;
  formData.email = document.getElementById("email").value;
  formData.message = document.getElementById("message").value;
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/form", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(formData));
});
