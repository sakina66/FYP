function checkauth()
{
  var uid = localStorage.getItem("currentuser");
  console.log(uid)
  var pathname = location.pathname;
  

 console.log(uid)
  if (uid){

    if (pathname === "/login.html" || pathname === "/register.html") {
      location.assign("/companies.html");
    }
  }
 
  else {
    if (pathname === "/companies.html" ) {
      location.assign("/login.html");
    }
  }
}


checkauth();
