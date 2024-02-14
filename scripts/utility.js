function addElementById (elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function removeElementById(elementId){
    const sectionElement = document.getElementById(elementId);
    sectionElement.classList.remove('hidden')
}

function setBackgroundColor(id){
    const elementId = document.getElementById(id);
    elementId.classList.add('bg-orange-400')
}
function removeBackgroundColor(id){
    const elementId = document.getElementById(id);
    elementId.classList.remove('bg-orange-400')
}