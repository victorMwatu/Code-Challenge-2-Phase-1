
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
    const editButton = document.createElement('button');
    const toggleAttendance = document.createElement('button');
    const time = document.createElement('p');

    //name list buttons for deleting and editing and add class names for group event handling
    deleteButton.innerText = 'Delete';
    time.innerHTML = `added on ${(new Date).toLocaleString()}`
    deleteButton.classList.add('deleteButton');
    editButton.innerText = 'Edit Name';
    editButton.classList.add('editButton');
    toggleAttendance.innerText = "Click To Toggle Attendance";
    toggleAttendance.addEventListener('click', function() {
        if(newGuest.innerHTML.includes("Not Attending")) {
            
            newGuest.innerText = `${name} ,Attending ,  `;
            newGuest.appendChild(toggleAttendance);
            newGuest.appendChild(editButton);
            newGuest.appendChild(deleteButton);
            newGuest.appendChild(time);
        }else  {
            
            newGuest.innerText = `${name} ,Not Attending ,  `;
            newGuest.appendChild(toggleAttendance);
            newGuest.appendChild(editButton);
            newGuest.appendChild(deleteButton);
            newGuest.appendChild(time);
        }
    })
   
    
    //append names, time, and buttons to list items if list is not full
    newGuest.innerText = `${name} ,${rsvp} ,  `;
    newGuest.appendChild(toggleAttendance);
    newGuest.appendChild(editButton);
    newGuest.appendChild(deleteButton);
    newGuest.appendChild(time);
    if (guestCount < 10) {
        guestList.appendChild(newGuest);
    }else {
        alert('The list is full.');
    }
    //add color based on category
    if (category === 'friend'){
            newGuest.classList.add('fre');
    }else if (category === 'family'){
                newGuest.classList.add('fam');
    }else if (category === 'colleague'){
            newGuest.classList.add('coll');      
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
            nameItem.textContent = `${newName} ,${rsvp} ,  `;
            newGuest.appendChild(toggleAttendance);
            newGuest.appendChild(editButton);
            newGuest.appendChild(deleteButton);
            newGuest.appendChild(time);
            } else {
            nameItem.textContent = `${name} ,${rsvp} ,  `; // Revert if empty
            newGuest.appendChild(toggleAttendance);
            newGuest.appendChild(editButton);
            newGuest.appendChild(deleteButton);
            newGuest.appendChild(time);
            }

        //     if (category.value === 'friend'){
        //     nameItem.classList.add('fre');
        // }else if (category.value === 'family'){
        //         nameItem.classList.add('fam');
        // }else if (category.value === 'colleague'){
        //     nameItem.classList.add('coll');
            
        // }
        }
        
        // Save on Enter key or blur
        input.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
            saveName();
            }
        });
        
        input.addEventListener('blur', saveName);

            }));
        if (category.value === 'friend'){
            newGuest.classList.add('fre');
        }else if (category.value === 'family'){
                newGuest.classList.add('fam');
        }else if (category.value === 'colleague'){
            newGuest.classList.add('coll');
            
        }
        this.reset();
});

