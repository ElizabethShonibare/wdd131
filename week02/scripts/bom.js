// select elements from the DOM
const inputElement = document.querySelector('#favchap')
const buttonElement = document.querySelector('button')
const listElement = document.querySelector('#list')
// const li = document.createElement('li');




// wait for button clicks
buttonElement.addEventListener('click', function () {

    if (inputElement.value != '') {

        const li = document.createElement('li');
        li.textContent = inputElement.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖️';
        deleteButton.addEventListener('click', function () {
            listElement.removeChild(li);
            inputElement.focus();
        });
        
        li.appendChild(deleteButton);
        
        listElement.appendChild(li);
        
        inputElement.value = "";
    }
    
    inputElement.focus();
    
});
