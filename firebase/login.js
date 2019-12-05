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
