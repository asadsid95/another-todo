let taskLists = document.getElementById('tasks-list')

let formTaskCreation = document.getElementById('task-form')
let inputTaskTitle = document.getElementById('task-title')
let textareaDescription = document.getElementById('task-description')
let buttonSubmitTask = document.getElementById('submit')
let tasksList = document.getElementById('tasks-list')

// event listener for click event so the data submitted via input field can be added into webpage
function addTaskToList(e){
    
        e.preventDefault()
    
        // extract task title from input
        const taskTitle = inputTaskTitle.value
        // extract task description from input
        const taskDescription = textareaDescription.value

        // create div for the task, assign class name and styles 
        const newTaskDiv = document.createElement('div')
        const divStyle = {
            'backgroundColor': 'pink',
            'display': 'flex',
            'flexDirection': 'column',
            'justifyContent': 'center'
    
        }
        for ( const [styleName, value] of Object.entries(divStyle)) {
            newTaskDiv.style[styleName] = value
        }
    
        // create li element for the task itself
        const newTask = document.createElement('li')
        newTask.className='task'

        // create h3 for task title
        const newTaskTitle = document.createElement('h3')
        newTaskTitle.textContent= taskTitle

        // create p element for the task description
        const newTaskdescription = document.createElement('p')
        newTaskdescription.textContent= taskDescription
        
        // create button which will be beside <li>
        const deleteTaskButton = document.createElement('button')
        deleteTaskButton.className='delete-button'
        deleteTaskButton.textContent = 'Delete'
    
        newTask.append(newTaskTitle, newTaskdescription, deleteTaskButton)

        newTaskDiv.appendChild(newTask)
        taskLists.append(newTaskDiv)
        
        inputTaskTitle.value = ''
        textareaDescription.value = ''
    
        function removeTask() {
            taskLists.removeChild(newTaskDiv)
        }

        // event listener for clicking on delete task that should delete specific task
        deleteTaskButton.addEventListener('click', removeTask)
    }

buttonSubmitTask.addEventListener('click', addTaskToList)
