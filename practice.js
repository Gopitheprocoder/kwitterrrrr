
//ADD YOUR FIREBASE LINKS
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

 function user_name_add(){
     var userName=document.getElementById("input_box").value;
     firebase.database().ref("/").child(userName).update({
         purpose:"addUser"
     });
     
 }