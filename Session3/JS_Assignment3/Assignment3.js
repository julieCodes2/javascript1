function addAttendee() {
let name = attendeeList.first.value + " " 
     + attendeeList.last.value;
     //alert(attendeeList.first.value)
     //alert(name);
    let ul = document.getElementById("attendees");
    let li = document.createElement("LI");
    li. appendChild(document.createTextNode(name));
    ul.appendChild(li);
}
//Editing Git