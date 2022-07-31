const deleteBtn = document.querySelectorAll('.clickMe')

console.log('butts' + deleteBtn)

Array.from(deleteBtn).forEach(e => {
    e.addEventListener('click', deleteNote)
})

async function deleteNote() {

    const noteToDelete = this.parentNode.childNodes[1].innerText 
    console.log(noteToDelete)
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