const todoContainer = document.getElementById('todo-container');

const ul = document.createElement('ul');
todoContainer.append(ul);

function addItem() {
    
    let addedItem = document.getElementById('item').value;
    const listItem = document.createElement('li');
    
    listItem.classList = 'todo-items';

    if(addedItem.length !== 0) {
        ul.appendChild(listItem);
        listItem.textContent = addedItem;
        document.getElementById('item').value = "";

        const deleteButton = document.createElement('button');
        deleteButton.classList = 'delete-button';
        deleteButton.textContent = 'Delete';
        listItem.append(deleteButton);

        deleteButton.addEventListener('click', ()=> {
            ul.removeChild(listItem);
            ul.removeChild(deleteButton);
        })
    }

    

}