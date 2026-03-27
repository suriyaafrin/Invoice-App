const save = document.querySelector(".save");
const street=document.getElementById("street");
const value=document.querySelector(".value");
const form=document.querySelector(".input-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const street= FormData.get("street");
  const data = Object.fromEntries(formData.entries());


  console.log(data);

});