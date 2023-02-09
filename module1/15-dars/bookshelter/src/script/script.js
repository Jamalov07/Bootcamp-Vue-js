const loginBtn = document.querySelector(".login-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

loginBtn.addEventListener("click", () => {
  console.log(username.value, password.value);
  login(username.value, password.value);
});

async function login(username, password) {
  const body = {
    email: username,
    password: password,
  };
  console.log(JSON.stringify(body));
  const response = await fetch("http://3.92.175.77:3000/admin/login", {
    method: "POST",
    body: JSON.stringify(body),
    mode: "no-cors",
  });
  console.log(response);
  const result = await response.json();
  console.log(await result);
}
