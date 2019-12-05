var firebaseConfig = {
  apiKey: "AIzaSyDgBW9gO25sZbSJfEwWPjDD5OEVh0SDWCM",
  authDomain: "fypproject-88822.firebaseapp.com",
  databaseURL: "https://fypproject-88822.firebaseio.com",
  projectId: "fypproject-88822",
  storageBucket: "fypproject-88822.appspot.com",
  messagingSenderId: "359136044394",
  appId: "1:359136044394:web:60f72fea7a771a5be67113",
  measurementId: "G-KKSP66V83T"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  async function signupwithfirebase(email,password) {
      try{
        var response = await firebase.auth().createUserWithEmailAndPassword(email, password);
        return response;
      }
      catch(e)
      {
          throw e;
      }    
  }



  async function signinwithfirebase(email,password){
      try{
        var response = await firebase.auth().signInWithEmailAndPassword(email, password);
        return response;
      }
      catch(e)
      {
          throw e;
      }
  }