


window.addEventListener('load',loadgrid(),getmaxid() );
  

function getmaxservicid(){
  var db = firebase.firestore();
  db.collection("services").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}
 function getmaxid() 
{
 // const markers = [];
  //await firebase.firestore().collection('services').get()
   // .then(querySnapshot => {
     // querySnapshot.docs.forEach(doc => {
     // markers.push(doc.data());
    //});
  //});
  //return markers;

  var db = firebase.firestore();
  db.collection("services").orderBy("serviceid", "desc").limit(1)
               
                .onSnapshot(function(snapshot) {
                
                    snapshot.forEach(function (userSnapshot) {
                      var x = parseInt( userSnapshot.data().serviceid)+1;
                   document.getElementById("txtserviceid").value=x;

         
                    });
                });
}

async function loadgrid(){
  try {


var response = await firebase
.firestore()
.collection('services')

.onSnapshot(response => {
 var checkempty = response.empty

 response.forEach(data=>{
    document.getElementById("grdrow").innerHTML +=
  '<tr>'+
'<td>'+data.data().serviceid+'</td>'+
'<td>'+data.data().servicedesc+'</td>'+
'<td>'+data.data().isactive+'</td>'+

'<td>'+
'<label class="badge badge-danger">Update</label>'+
'</td>'+
'</tr>'

    
 })
    
})


  } catch (error) {
      console.log(error.message)
  }
}


function cleargrd(){
  var table = document.getElementById("grdservice");
	var tbody = document.getElementById("grdrow");
	if (tbody != null) {
		table.removeChild(tbody);
		tbody = null;
	}
	tbody = createElementWithId("tbody", "grdrow");
	table.appendChild(tbody);
}
function add()
{
var serviceid=document.getElementById("txtserviceid").value;
var servicedesc=document.getElementById("txtservicedesc").value;




if (fieldvalidation()==1){
  var db = firebase.firestore();
  db.collection("services").add({
    serviceid: serviceid,
    servicedesc: servicedesc,
    branchid :"1",
companyid:"1",
isactive:"True"
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
}

document.getElementById("alrt").innerHTML="Data Successfully Added";
document.getElementById("alrt").style.color = "green";

}
function fieldvalidation(){
 var x= document.getElementById("txtserviceid").value;
 var y= document.getElementById("txtservicedesc").value;

 if (y =="" ){

  document.getElementById("alrt").innerHTML="Text Required";
return 0;
 }
return 1;
}


