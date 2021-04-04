// creates a DOM element, with following parameters as class names
function createClassedElement(nodename, ...classNames) {
    const newElement = document.createElement(nodename);

    classNames.map((className) => {
        newElement.classList.add(className);
    })

    return newElement;
}

// returns the vale of the text input field
const parseInput = () => {
    const toDoInput = document.querySelector('#to-do-list__input');
    return toDoInput.value;
}

// returns a DOM element representing a to-do-list item
const createToDoListElement = (string) => {
    const newToDoListElement = createClassedElement('li', 'to-do-list__items__item');

    const checkBoxElement = createClassedElement('input', 'to-do-list__items__item__checkbox');
    checkBoxElement.setAttribute('type', 'checkbox');

    const textElement = createClassedElement('p', 'to-do-list__items__item__text');
    textElement.innerText = string;

    const editButton = createClassedElement('button', 'to-do-list__items__item__edit');
    editButton.appendChild(createClassedElement('i', 'fas', 'fa-edit'));
    addEditButtonEvent(editButton);
    
    const deleteButton = createClassedElement('button', 'to-do-list__items__item__delete');
    deleteButton.appendChild(createClassedElement('i', 'fas', 'fa-times'));
    addDeleteButtonEvent(deleteButton);

    toDoListElementComponents = [checkBoxElement, textElement, editButton, deleteButton];

    toDoListElementComponents.forEach(component => {
        newToDoListElement.appendChild(component);
    });

    addCheckboxEvent(newToDoListElement);
    return newToDoListElement;
}

// Form handling
const toDoInputForm = document.querySelector('.to-do-list__input');
toDoInputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const toDoInputText = parseInput();
    // sanitize input server-side, if communicating w/ backend

    const toDoElement = createToDoListElement(toDoInputText);

    const toDoList = document.querySelector('.to-do-list__items');
    toDoList.appendChild(toDoElement);

    toDoInputForm.reset();
})


function addCheckboxEvent(toDoListElement) {
    const checkbox = toDoListElement.querySelector('.to-do-list__items__item__checkbox');
    
    checkbox.addEventListener('change', function() {
        if(this.checked) {
            this.parentElement.classList.add('to-do-list__items__item--done');
            return
        }
    
        this.parentElement.classList.remove('to-do-list__items__item--done');
})}

function addDeleteButtonEvent (deleteButton) {
    deleteButton.addEventListener('click', function() {
        this.parentElement.remove();
    })
}

function addEditButtonEvent (eventButton) {
    eventButton.addEventListener('click', function() {
        const toDoText = this.previousElementSibling;
        toDoText.setAttribute('contenteditable', 'true');
        toDoText.focus();

        toDoText.addEventListener('blur', function() {
            this.setAttribute('contenteditable', 'false');
        })
    })
}

//Clears everything in the to do list
const clearAllButton = document.querySelector('.to-do-list__clear-all');
clearAllButton.addEventListener('click', () => {
    const toDoList = document.querySelector('.to-do-list__items');
    toDoList.innerHTML = '';
});