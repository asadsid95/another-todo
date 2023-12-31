let taskLists = document.getElementById('tasks-list')

let formTaskCreation = document.getElementById('task-form')
let inputTaskTitle = document.getElementById('task-title')
let textareaDescription = document.getElementById('task-description')
let buttonSubmitTask = document.getElementById('submit')
let tasksList = document.getElementById('tasks-list')
let optionDeadline = document.getElementById('deadlines')
let optionPriority = document.getElementById('priority')
let optionCategory = document.getElementById('category')

// event listener for click event so the data submitted via input field can be added into webpage
function addTaskToList(e){
    
        e.preventDefault()
    
        // extract task title from input
        const taskTitle = inputTaskTitle.value
        // extract task description from input
        const taskDescription = textareaDescription.value
        // extract task deadline from input
        const taskDeadline =optionDeadline.value
        //extract task priority
        const textPriority = optionPriority.value
        //extract task category
        const textCategory = optionCategory.value

        // date and time to be used when task is created
        const newTaskCreatedAt = new Date().toLocaleString()

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
        newTaskTitle.textContent= `Title: ${taskTitle}`

        // create p element for the task description
        const newTaskdescription = document.createElement('p')
        newTaskdescription.textContent= `(created at ${newTaskCreatedAt}) Description: ${taskDescription}`

        // create span element to show task's deadline
        const newTaskDeadline = document.createElement('span')
        newTaskDeadline.textContent = `Due: ${formatDueDate(taskDeadline)}`

        // create span element to show task's priority
        const newTaskPriority = document.createElement('span')
        newTaskPriority.textContent = `Priority: ${textPriority}`

        // create span element to show task's category
        const newTaskCategory = document.createElement('span')
        newTaskCategory.textContent = `Category: ${textCategory}`

        // create button which will be beside <li>
        const deleteTaskButton = document.createElement('button')
        deleteTaskButton.className='delete-button'
        deleteTaskButton.textContent = 'Delete'
    
        newTask.append(newTaskTitle, newTaskdescription, newTaskDeadline, newTaskPriority, newTaskCategory, deleteTaskButton)

        newTaskDiv.appendChild(newTask)
        taskLists.append(newTaskDiv)
        
        inputTaskTitle.value = ''
        textareaDescription.value = ''
        optionDeadline.selectedIndex=0
        optionPriority.selectedIndex=0
        optionCategory.selectedIndex=0
    
        function removeTask() {
            taskLists.removeChild(newTaskDiv)
        }

        // event listener for clicking on delete task that should delete specific task
        deleteTaskButton.addEventListener('click', removeTask)
}

function formatDueDate(selectedDue) {
    if (selectedDue === '1 hour') {
        const oneHourLater = new Date(Date.now() + 60 * 60 * 1000);
        return oneHourLater.toLocaleString();
    } else if (selectedDue === '1 day') {
        const oneDayLater = new Date(Date.now() + 24 * 60 * 60 * 1000);
        return oneDayLater.toLocaleString();
    } else if (selectedDue === '1 week') {
        const oneWeekLater = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        return oneWeekLater.toLocaleString();
    } else {
        return 'N/A';
    }
}

buttonSubmitTask.addEventListener('click', addTaskToList)
