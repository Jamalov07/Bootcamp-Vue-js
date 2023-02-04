const btn = document.querySelector(".btn");

async function check() {
  const response = await (
    await fetch(`http://3.92.175.77:3000/admin/login`, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "jamalov@gmail.com", password: "jamalov" }),
    })
  ).data;

  return await response;
}
console.log(check());

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (btn.style.marginLeft == "300px") {
    btn.style.marginLeft = "0px";
    btn.style.marginRight = "300px";
    //   } else if ((btn.style.marginRight = "300px")) {
  } else {
    btn.style.marginRight = "0px";
    btn.style.marginLeft = "300px";
  }
});

//   btn.style.marginLeft =
//     +btn.style.marginLeft.slice(0, btn.style.marginLeft.length - 2) +
//     300 +
//     "px";
// onmousedown
// onmouseenter
// onmouseleave
// onmousemove
// onmouseout
// onmouseover
// onmouseup
// onmousewheel
