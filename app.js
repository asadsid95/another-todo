let taskLists = document.getElementById('tasks-list')

let formTaskCreation = document.getElementById('task-form')
let inputTaskTitle = document.getElementById('task-title')
let buttonSubmit = document.getElementById('submit')
let tasksList = document.getElementById('tasks-list')
// adding event listener for click event so the data submitted via input field can be added into webpage
buttonSubmit.addEventListener('click', (e) => {

    e.preventDefault()

    const taskTitle = inputTaskTitle.value

    const newTask = document.createElement('li')
    newTask.textContent= taskTitle

    taskLists.appendChild(newTask)

    inputTaskTitle.value = ''
})