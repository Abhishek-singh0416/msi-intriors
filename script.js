document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const mailto = `mailto:you@yourbusiness.com?subject=New Inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.location.href = mailto;
});
