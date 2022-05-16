
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyB1cztxeM9uBzpXLW9nNP1a7V-Pbgzyisw",
      authDomain: "kwitter-43559.firebaseapp.com",
      projectId: "kwitter-43559",
      storageBucket: "kwitter-43559.appspot.com",
      messagingSenderId: "338247423991",
      appId: "1:338247423991:web:5adba1ee721798e93600f2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";


function addRoom()
{
 room_name = document.getElementById("room_name").value;

 firebase.database().ref("/").child(room_name).update({
purpose : "adding room name" 
 });

 localStorage.setItem("room_name" , room_name);
 
 window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

