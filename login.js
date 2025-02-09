document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Form submit hone se rokta hai

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (email && name) {
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userName", name);
      alert("Login Successful!");
      window.location.href = "index.html"; // Homepage par redirect karega
  } else {
      alert("Please fill all fields.");
  }
});