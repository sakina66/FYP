async function logout() {
    try{
        // var response = await firebase.auth().signOut();
        localStorage.removeItem('currentuser')
        location.assign('/login.html')
    }
    catch(e)
    {
        console.log(e.message)
    }

  }

  