
// handle submit button event 
document.getElementById("eventRegistration").addEventListener("submit", function(e) {
      e.preventDefault();
    //create variables for form data
    const name = document.getElementById("name").value;
    const category = document.getElementById("category").value;
    const rsvp = document.getElementById("rsvp").value;
    const guestList = document.getElementById('list');
    const guestCount = guestList.querySelectorAll('li').length;
    const newGuest = document.createElement('li');
    const deleteButton = document.createElement('button');
    const editButton = document.createElement('Button');

    //name list buttons for deleting and editing and add class names for group event handling
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('deleteButton');
    editButton.innerText = 'Edit Name';
    editButton.classList.add('editButton');
    
    //append names, time, and buttons to list items if list is not full
    newGuest.innerText = `${name} ,${rsvp} , added on ${(new Date).toLocaleString()}  `;
    newGuest.appendChild(editButton);
    newGuest.appendChild(deleteButton);
    if (guestCount < 10) {
        guestList.appendChild(newGuest);
    }else {
        alert('The list is full.');
    }

    //handle delete buttons events
    document.querySelectorAll('.deleteButton').forEach( button => button.addEventListener('click', function(){
        const listItem = this.parentNode;
        console.log(listItem);
        listItem.remove();
    }));

    //handle edit buttons events
    document.querySelectorAll('.editButton').forEach(button => button.addEventListener('click', function(){
        const nameItem = this.parentNode;
        const currentName = this.parentNode.innerText;

                // Create input field
        const input = document.createElement('input');
        input.type = 'text';
        input.value = "";
        
        // Replace li content with input
        nameItem.textContent = '';
        nameItem.appendChild(input);
        input.focus();
        
        // Handle saving the new name
        function saveName() {
            const newName = input.value.trim();
            if (newName !== '') {
            nameItem.textContent = `${newName} ,${rsvp} , edited on ${(new Date).toLocaleString()}  `;
            nameItem.appendChild(editButton);
            nameItem.appendChild(deleteButton);
            } else {
            nameItem.textContent = `${name} ,${rsvp} , added on ${(new Date).toLocaleString()}  `; // Revert if empty
            nameItem.appendChild(editButton);
            nameItem.appendChild(deleteButton);
            }
        }
        
        // Save on Enter key or blur
        input.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
            saveName();
            }
        });
        
        input.addEventListener('blur', saveName);
        // const newName = prompt('Enter new name:', currentName);
  
        // if (newName !== null && newName.trim() !== '') {
        //     nameItem.textContent = newName.trim();
        // }
            }));
});

