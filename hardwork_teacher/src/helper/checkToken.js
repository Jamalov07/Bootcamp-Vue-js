const checkToken = (router) => {
  let token = localStorage.getItem("token");
  console.log(token);
  if (token) {
    // router.replace({ path: "/" });
    return true;
  } else {
    return false;
    // router.replace({ path: "/login" });
  }
};

export default checkToken;
