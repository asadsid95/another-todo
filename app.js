let taskLists = document.getElementById('tasks-list')

let formTaskCreation = document.getElementById('task-form')
let inputTaskTitle = document.getElementById('task-title')
let buttonSubmitTask = document.getElementById('submit')
let tasksList = document.getElementById('tasks-list')

// event listener for click event so the data submitted via input field can be added into webpage
function addTaskToList(e){
    
        e.preventDefault()
    
        // extract text from input
        const taskTitle = inputTaskTitle.value
    
        // create div for the task 
        const divStyle = {
            'backgroundColor': 'pink',
            'display': 'flex',
            'justifyContent': 'center'
    
        }
    
        const newTaskDiv = document.createElement('div')
        newTaskDiv.className = 'task'
        for ( const [styleName, value] of Object.entries(divStyle)) {
            newTaskDiv.style[styleName] = value
        }
    
        // create li element for the task itself
        const newTask = document.createElement('li')
        newTask.textContent= taskTitle
        
        // create button which will be beside <li>
        const deleteTaskButton = document.createElement('button')
        deleteTaskButton.className='delete-button'
        deleteTaskButton.textContent = 'Delete'
    
        newTaskDiv.append(newTask, deleteTaskButton)
        taskLists.append(newTaskDiv)
        
        inputTaskTitle.value = ''
    
        function removeTask() {
            taskLists.removeChild(newTaskDiv)
        }

        // event listener for clicking on delete task that should delete specific task
        deleteTaskButton.addEventListener('click', removeTask)
    }
    
buttonSubmitTask.addEventListener('click', addTaskToList)
