// returns the vale of the text input field
const parseInput = () => {
    const toDoInput = document.querySelector('#to-do-list__input');
    return toDoInput.value;
}

// returns a string literal for a to do list item
const createToDoListElement = (string) => {
    return `
    <li class="to-do-list__items__item">
        <input class="to-do-list__items__item__checkbox" type="checkbox">
        <p class="to-do-list__items__item__text">${string}</p>  
        <button class="to-do-list__items__item__edit"><i class="fas fa-edit"></i></button>
        <button class="to-do-list__items__item__delete"><i class="fas fa-times"></i></button>
    </li> 
    `
}

// Appends a string to the the to do list 
const appendToDoListElement = (newElem) => {
    const toDoList = document.querySelector('.to-do-list__items');
    toDoList.innerHTML += newElem;
}

// Form handling
const toDoInputForm = document.querySelector('.to-do-list__input');
toDoInputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const toDoInputText = parseInput();
    
    //function to sanitize input
    const toDoElement = createToDoListElement(toDoInputText);
    appendToDoListElement(toDoElement);
})