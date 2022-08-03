const deleteBtn = document.querySelectorAll('.clickMe')
const editBtn = document.querySelectorAll('.edit')



Array.from(deleteBtn).forEach(e => {
    e.addEventListener('click', deleteNote)
})
Array.from(editBtn).forEach(e => {
    e.addEventListener('click', editNote)
})

async function deleteNote() {
    const noteToDelete = this.parentNode.childNodes[1].textContent 
    try{
        const response = await fetch('delete-note', {
            method: 'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            itemFromJs : noteToDelete
            })
        })
        location.reload()
    }
    catch(err){
        console.log(err)
    }
}

async function editNote() {
    //grab text from note
    const noteToEdit = this.parentNode.childNodes[1].textContent
    const noteNameToEdit =  this.parentNode.childNodes[3].textContent
    const noteColorToEdit =  this.parentNode.childNodes[5].textContent
    const noteInfoToEdit =  this.parentNode.childNodes[7].textContent
    console.log(noteToEdit, noteNameToEdit, noteColorToEdit, noteInfoToEdit)
    //create modal that uses the variables stored above
    
    //then submit will send updated text and reload
    try{
        const response = await fetch('edit-note', {
            method: 'update',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
            itemFromJs : noteToEdit
            })
        })
        /* location.reload() */
    }
    catch(err){
        console.log(err)
    }
}

var colors = {
    /* Hex Transparency: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 */
    'Yellow': '#ffff9fCC', /* https://www.flatuicolorpicker.com/colors/canary/ */
    'Blue': '#c5eff7CC', /* https://www.flatuicolorpicker.com/colors/humming-bird/ */
    'Green': '#b2de27CC', /* https://www.flatuicolorpicker.com/colors/fuego/ */
    'Orange': '#fde3a7CC', /* https://www.flatuicolorpicker.com/colors/cape-honey/ */
    'Purple': '#d5b8ffCC', /* https://www.flatuicolorpicker.com/colors/mauve/ */
    'Pink': '#fbe7efCC' /* https://www.flatuicolorpicker.com/colors/sweetly/ */
}
function changeColor() {
    const noteColors = document.getElementsByClassName('note')
    for (let i = 0; i < noteColors.length; i++) {
        let color = noteColors[i].childNodes[5].innerText
        noteColors[i].style.backgroundColor = colors[color]
        /* https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4 */
    }
}

changeColor()