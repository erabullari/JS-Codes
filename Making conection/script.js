function changedname(emri){
    document.getElementById('personalename').innerHTML= 
    `<div id="namepleace">
    <input ="text"  oninput="emrindryshuar(this)" placeholder="Shkruani emrin"/>
    <button onclick="ndryshoEmrin('namepleace')">Ruaj</button>
    </div>`
}

var emriFinal="";
function emrindryshuar(element){
    emriFinal=element.value;
}

function ndryshoEmrin(vendiemrit){
    document.getElementById('personalename').innerHTML=emriFinal; 
}


var div =document.getElementById(person);

 //funksioni qe perdorim per te ber add request
function addPerson(person){
    //foto qe duam te fshiejm i ruajm ne nje variabel
    var para = document.getElementById('acept');
    var para1 = document.getElementById('delet');
    //fshijme fotot acept dhe delete
    para.remove();
   para1.remove();
    
    //ruajme brenda variables div ,divin qe do fshijme 
    var div =document.getElementById(person);
    
    //fshij divin
    document.getElementById(person).remove();
    //marrim numrin e requestave dhe e zvolojmjme me nje kur klikojme acept
   var nrReq= parseInt(document.getElementById('requestnumber').innerText)
    document.getElementById('requestnumber').innerText=nrReq-1
   //rrisim numrin e follwersa
    var nrReq2= parseInt(document.getElementById('follower').innerText)
    document.getElementById('follower').innerText=nrReq2+1

    // shtojme divin qe fshim tek forthdiv
   var deletedel=document.getElementById('forthdiv').appendChild(div);


}
 

//funksioni qe perdorim per decline request
function removePerson(person){
  var fun =document.getElementById(person).remove();
    var nrReq= parseInt(document.getElementById('requestnumber').innerText)
   document.getElementById('requestnumber').innerText=nrReq-1
    
   
}