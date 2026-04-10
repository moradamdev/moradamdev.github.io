//Add items to list
const showList = document.querySelector('.show-list');
const submitButton = document.querySelector('.submit');
const showText = document.querySelector('.show-text');
const selectB = document.querySelector('#selectBtn');
//showListTest = document.getElementsByClassName('list-item');
//const removeButton = document.getElementsByClassName('remove');


submitButton.addEventListener('click',()=>{
    event.preventDefault();
    if(showText.value != ""){
        //add the ul
        var newListItem = document.createElement('ul');
        newListItem.setAttribute('class','list-item');
        showList.appendChild(newListItem);
        //add the li for show name
        var newListShow = document.createElement('li');
        newListShow.setAttribute('class','list-show');
        newListShow.innerText = showText.value;
        newListItem.appendChild(newListShow);
        //add the li for the score
        var newListScore = document.createElement('li');
        newListScore.setAttribute('class','list-score');
        newListScore.innerText = selectB.value;
        newListItem.appendChild(newListScore);
        //add the remove link
        var newLinkRemove = document.createElement('a');
        newLinkRemove.setAttribute('href','#');
        newLinkRemove.setAttribute('class','remove');
        newLinkRemove.innerText = 'Remove';
        newListItem.appendChild(newLinkRemove);
        showText.value = '';
        selectB.value = '-';

        
        //console.log(showList);
    }
});


//remove all items
const listItems = document.getElementsByClassName('list-item');
const clearButton = document.querySelector('.remove-all');
clearButton.addEventListener('click', () =>{
    for(var i = 0; i < listItems.length; i){
        console.log(listItems[i]);
        listItems[i].remove();
    }
});

showList.addEventListener('click', removeItem);

function removeItem(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove();
    }
}


//remove individual item on list
// const removeButton = document.querySelectorAll('.remove');
// const removeParent = removeButton[0].parentElement;

// removeButton.forEach(removeButton => {
//     removeButton.addEventListener('click', () =>{
//         //removeButton.parentElement.remove();
//         console.log(removeButton);
        
//     });
// });












