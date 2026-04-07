AOS.init({
  duration:1000
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if(name === "" || email === "" || message === ""){
    alert("All fields are required");
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(!email.match(emailPattern)){
    alert("Enter a valid email");
    return;
  }

  alert("Message sent successfully 🚀");
  form.reset();
});