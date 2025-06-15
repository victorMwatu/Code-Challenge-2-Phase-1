
// handle submit button event 
document.getElementById("eventRegistration").addEventListener("submit", function(e) {
      e.preventDefault();
    //create variables for form data
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const rsvp = document.getElementById("rsvp").value;
    const guestList = document.getElementById('list');
    const guests = document.getElementById('list');
    const guestCount = guests.querySelectorAll('li').length;
    //add names to list
    const newGuest = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('Button');


    deleteButton.innerText = 'Delete';
    editButton.innerText = 'Edit Name';

    newGuest.innerText = `${name} ,${rsvp} , added on ${(new Date).toLocaleString()}  `;
    newGuest.appendChild(editButton);
    newGuest.appendChild(deleteButton);
    if (guestCount < 10) {
        guestList.appendChild(newGuest);
    }else {
        alert('The list is full.');
    }
});