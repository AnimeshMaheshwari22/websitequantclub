
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();

    var name= getInputVal('name');
    var usn= getInputVal('usn');
    var phone= getInputVal('phone');
    var email= getInputVal('email');
    var message= getInputVal('message');
saveMessage(name,usn,phone,email,message);
document.querySelector('.alert').style.display='block';

setTimeout(function(){
    document.querySelector('.alert').style.display='none';
},3000);
document.getElementById('contactForm').reset();
}
function getInputVal(id){
    return document.getElementById(id).value;
}
function saveMessage(name,usn,phone,email,message){
var newMessageRef=messagesRef.push();
newMessageRef.set({
name:name,
usn:usn,
phone:phone,
email:email,
message:message
})
}