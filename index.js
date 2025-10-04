const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  output.style.display = "block";
  output.innerHTML = `
    <h3>Submitted Data:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Age:</strong> ${age}</p>
  `;

  document.body.style.background = "#f9fff4";
});
