async function logout() {
    try{
        // var response = await firebase.auth().signOut();
        localStorage.removeItem('currentuser')
        location.assign('/index.html')
    }
    catch(e)
    {
        console.log(e.message)
    }

  }

  