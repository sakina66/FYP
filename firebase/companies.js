window.addEventListener("load",avatarname);


async function avatarname(){
    try{
        var current = localStorage.getItem('currentuser')
        console.log(current)
        var response = await firebase
        .firestore()
        .collection("userdetail")
        .doc(current)
        .get();
      var avatarname = document.getElementById('avatarname');
      avatarname.innerHTML = `${response.data().usname}`
      
       
    }
    catch(e)
    {
        console.log(e.message);
    }
}
