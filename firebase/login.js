var email = document.getElementById('email');
var password = document.getElementById('password');


async function login(){

    var em = email.value;
    var pass = password.value;
    try{
    var response = await signinwithfirebase(em, pass)
    var uid = response.user.uid;
    localStorage.setItem('currentuser',uid);
    location.assign("/companies.html");

}
    catch(e)
    {
        console.log(e.message)
    }
}


async function companylogin(){
    var em = email.value;
    var pass = password.value;
    try{
    var response = await signinwithfirebase(em, pass)
    var uid = response.user.uid;
    localStorage.setItem('currentuser',uid);
     location.assign("/admin/dashboard.html");
  

}
    catch(e)
    {
        console.log(e.message)
    }
}


async function loginwithgmail(){
    try{
    var provider = await new firebase.auth.GoogleAuthProvider();
    var result = await firebase
        .auth()
        .signInWithPopup(provider)
    var user = result.user;
      var name = result.user.displayName;
      var email = result.user.email;
      var id = result.user.uid;
     var dbresp = await firebase
      .firestore()
      .collection('userdetail')
      .doc(id)
      .set({  
          usname:name,
          usemail:email
      });
      localStorage.setItem('currentuser',id);
    
      location.assign("/companies.html");
       
}
    catch(e)
    {
        location.assign("/login.html");
        console.log(e.message)
    }
}