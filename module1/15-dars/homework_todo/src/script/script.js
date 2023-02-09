const loginBtn = document.querySelector(".login-btn");
const username = document.querySelector("#username");
const password = document.querySelector("#password");

loginBtn.addEventListener("click", () => {
  console.log(username.value, password.value);
  login(username.value, password.value);
});

async function login(username, password) {
  const url = "http://localhost:3000/user/login";
  const body = {
    username: username,
    password: password,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const result = await response.json();
  console.log(result);
  localStorage.setItem("owner", result.user.username);
  localStorage.setItem("refreshtoken", result.tokens.refresh_token);
  window.open("./mytodolist.html");
}
