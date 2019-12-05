var em = document.getElementById('usemail');
var pass = document.getElementById('uspass');
var nme = document.getElementById('usname');
var numb = document.getElementById('usnumber');


async function register(){

    var eml = em.value;
    var ps = pass.value;
    var name = nme.value;
    var number = numb.value;
    try{
    var response = await signupwithfirebase(eml,ps);
    var uid = response.user.uid;
    var resp = await firebase
    .firestore()
    .collection('userdetail')
    .doc(uid)
    .set({  
        usname:name,
        usemail:eml,
        usnumber:number
    });
    alert("user registered");
    location.assign("/login.html");

    }
    catch(e)
    {
        alert(e.message);
    }
}
