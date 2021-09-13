
const firebaseConfig = {
      apiKey: "AIzaSyBlzwpCFjTmeZ6_bINUWWN-xvejhDqHrmk",
      authDomain: "kwitter-6d0e9.firebaseapp.com",
      databaseURL: "https://kwitter-6d0e9-default-rtdb.firebaseio.com",
      projectId: "kwitter-6d0e9",
      storageBucket: "kwitter-6d0e9.appspot.com",
      messagingSenderId: "1041318179585",
      appId: "1:1041318179585:web:225c38f99a72a2abd32100"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
var user_NAME=localStorage.getItem("userName");
document.getElementById("wel").innerHTML=" Welcome "+user_NAME+" !";
function addRoom(){
var room_name=document.getElementById("room").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Add"
});
localStorage.setItem("room Name",room_name);
window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
        console.log("room name-"+Room_names);
      row="<div class='room' id='+Room_names+' onclick='navigate(this.id)'>#'+Room_names+'</div> <hr>";
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
function leave(){
      localStorage.removeItem("name");
      localStorage.removeItem("room");
      window.location="index.html";
}
function navigate(name){
console.log(name);
localStorage.setItem("room Name",room_name);
window.location="kwitter_room.html";
}
