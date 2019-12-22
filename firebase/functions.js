window.addEventListener('load',checkcompany)

async function checkcompany(){
    try {
        
        var current = localStorage.getItem('currentuser')
        var element = document.getElementById('dshboard')
var response = await firebase
.firestore()
.collection('companyinformation')
.where('adminid','==',current)
.onSnapshot(response => {
   var checkempty = response.empty

   response.forEach(data=>{
       console.log(data.data().companyname)
       if(checkempty == false)
       {
           element.innerHTML = `<h1>${data.data().companyname}</h1>`
        }
   })
      
})


    } catch (error) {
        console.log(error.message)
    }
}

window.addEventListener('load',gettokens)
async function gettokens(){
    var element = document.getElementById('tokenelement')
    try {
        var comp ;
        var current = localStorage.getItem('currentuser')
    
        var response = await firebase
        .firestore()
        .collection('companyinformation')
        .where('adminid','==',current)
        .onSnapshot(res=>{
            res.forEach(data=>{
                comp = data.id
            })

         firebase
        .firestore()
        .collection('tokens')
        .where('companyid','==',comp)
        .orderBy('token_no')
        .get()
        .then(resp =>{
            resp.forEach(data2 =>{
                element.innerHTML += `
                <tr>
                <td></td>
                 <td>${data2.data().usname}</td>
                 <td>${data2.data().usnumber}</td>
                 <td>${data2.data().useremail}</td>
                 <td class="text-right">${data2.data().token_no}</td>
                 <td class="td-actions text-right">
                     <button type="button" rel="tooltip" class="btn btn-info btn-round btn-just-icon btn-sm" data-original-title="" title="">
                         <i class="material-icons">check</i>
                     </button>
                     <button type="button" rel="tooltip" class="btn btn-success btn-round btn-just-icon btn-sm" data-original-title="" title="">
                         <i class="material-icons">edit</i>
                     </button>
                     <button type="button" rel="tooltip" class="btn btn-danger btn-round btn-just-icon btn-sm" data-original-title="" title="">
                         <i class="material-icons">close</i>
                     </button>
                 </td>
             </tr>
                
                `
            })
        })
        
        })


       
            
    } catch (error) {
        console.log(error.message)
    }



}

function addcompany(){
// console.log('added')
              var img = document.getElementById('company-image')
          var admid = localStorage.getItem('currentuser')
          var companyname = document.getElementById('company-name').value;
          var username = document.getElementById('user-name').value;
          var companyemail = document.getElementById('company-email').value;
          var companycity = document.getElementById('company-city').value;
          var companybranch = document.getElementById('company-branch').value;
          var companyaddress = document.getElementById('company-address').value;
          var companytokens = document.getElementById('company-tokens').value;
          var companypostal  = document.getElementById('company-postal').value;

   const imgname = Math.random().toString();
   const imageRef = firebase
     .storage()
     .ref()
     .child(`images/${imgname}.png`);
   
   imageRef
     .put(img.files[0])
     .then(response => {
       console.log("uploaded");
       return imageRef.getDownloadURL();
     })
     .then(res => {
      
           firebase
             .firestore()
           .collection('companyinformation')
           .add({
               adminid:admid,
              companyname,
              username,
              companyaddress,
              companybranch,
              companycity,
              companytokens,
              companypostal,
              companyemail,
               profileimage:res
           })

    .then(tokenno =>{
        firebase
        .firestore()
        .collection('currentoken')
        .doc(tokenno.id)
        .set({
            currenttoken:0
        })
       
    } )
   
           window.alert('datasaved')
     
     })
     .catch(err => {
       console.log("err =>", err);
     });                      
           

}

async function getcompanies(){

    try{
  
    var currentuser = localStorage.getItem('currentuser')
    var compdata = document.getElementById('compdata')


        
    

        firebase
        .firestore()
        .collection("companyinformation")     
        .onSnapshot(snapshot => {
          compdata.innerHTML = "";
    
         
          snapshot.forEach(doc => {
            const data = doc.data();
            compdata.innerHTML += `
            <div class="col-md-3">
            <div class="team-player">
              <div class="card card-plain">
                <div class="col-md-10 ml-auto mr-auto">
                  <img src="${data.profileimage}" alt="Thumbnail Image" style = 'width:400px;height:150px;' class="img-raised rounded-image img-fluid">
                </div>
                <h4 class="card-title">${data.companyname}
                  <br>
                  <small class="card-description text-muted">${data.companytokens}</small>
                </h4>
                <div class="card-body">
                  <!-- <p class="card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque obcaecati incidunt in expedita repellendus dignissimos consequuntur rem cum optio fuga asperiores inventore ipsam, saepe esse sint tenetur quidem facere distinctio? -->
                    <p> for people to be able to follow them outside the site. </p>
                </div>
                <button onclick = 'generate("${doc.id}")' class="btn btn-primary">Generate Token</button>
        
              </div>
            </div>
           
          </div>
            
            `
       

          });})



} catch (error) {
    console.log(error.message)
}

}




async function generate(e){

try {
    
    var companyid = e;
    var user = localStorage.getItem('currentuser')

    var tokenresp = await firebase
    .firestore()
    .collection('currentoken')
    .doc(e)
    .get()

    // window.alert('your token no is ',)
console.log(tokenresp.data().currenttoken)
var token_no = tokenresp.data().currenttoken;
window.alert(`your token no will be${token_no}` )



   
    var userinfo = await firebase
    .firestore()
    .collection('userdetail')
    .doc(localStorage.getItem('currentuser'))
    .get()

    var usname = userinfo.data().usname;
    var useremail = userinfo.data().usemail;
    var usnumber = userinfo.data().usnumber;
    
    var response = await firebase
    .firestore()
    .collection('companyinformation')
    .doc(e)
    .get()

    var compname = response.data().companyname;
    

    var resp = await firebase 
    .firestore()
    .collection('currentoken')
    .doc(e)
    .set({
        currenttoken:token_no + 1
    })

    var resp = await firebase
    .firestore()
    .collection('tokens')
    .add({
        usname,
        useremail,
        companyid,
        usnumber,
        user,
        token_no
    })




} catch (error) {
    console.log(error.message)
}

}



