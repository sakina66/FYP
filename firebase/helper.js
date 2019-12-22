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

    if(pathname === '/companyregistration.html'){
      location.assign('/admin/dashboard.html')
    }
  }
 
  else {
    if (pathname === "/companies.html" || pathname === '/admin/tokens.html' || pathname === '/admin/dashboard.html' || pathname === 'admin/companydetails.html' ) {
      location.assign("/login.html");
    }
  }
}


checkauth();
