// ToDoList

const textBox = document.querySelector('#text-box'),
  taskList = document.querySelector('#task-list-container'),
  addBtn = document.querySelector('#add-btn'),
  clrBtn = document.querySelector('#clr-btn'),
  delBtn = document.querySelectorAll('.delete-btn'),
  editBtn = document.querySelectorAll('.edit-btn'),
  chkBox = document.querySelectorAll('.check-box'),
  filterBtn = document.querySelectorAll('.filter-btn')
let editId, isEdited = false

// To display the task list onload
window.addEventListener('load', DisplayList("all"))

// filter button function
filterBtn.forEach(btn => {
  btn.addEventListener('click', ()=>{
    // to toggle active class
    document.querySelector('.filter-btn.active').classList.remove('active')
    btn.classList.add('active')
    // to initiate the filter button id as the filter value
    btnId = btn.id
    DisplayList(btnId)
  })  
});

// display task list function
function DisplayList(filter) {
  // getting the localStorage array
  let getLocalStorage = localStorage.getItem('localStorageArray')
  // to pass an empty array if the localStorage is empty
  if (!getLocalStorage) {
    listArray = []
  } else {
    listArray = JSON.parse(getLocalStorage) // to convert json string into js object to use it inside javascript
    let li = ''
    listArray.forEach((list, index) => {
      // to toggle the checked class on the list text based on the list status
      let isCompleted = list.status == "completed" ? 'checked' : ''
      // to filter the tasks based on filter button IDs
      if ((filter == list.status) || (filter == "all")) {
        li += `<li class = 'list-item'>
        <input type = 'checkbox' class = 'check-box' id=${index} onClick = 'UpdateStatus(this)' ${isCompleted} />
        <p class = '${isCompleted}'>${list.text}</p>
        <span><i class='bx bx-dots-vertical-rounded three-dots'></i> 
          <span class="menu">
          <span class="menu-btn edit-btn" onClick = 'EditTask("${list.text}", ${index})'><i class='bx bxs-edit'></i> Edit</span>
          <span class="menu-btn delete-btn" onClick = 'DeleteTask(${index})'><i class='bx bxs-trash' ></i> Delete</span>
          </span>
        </span>
        </li>` 
      }
    })
    // passing the tasks onto the tasklist container
  taskList.innerHTML = li || "<li class = 'default-txt'>There are no tasks here<li>"
  // menu hide and show toggle
  const threeDots = document.querySelectorAll('.three-dots')
  const menu = document.querySelectorAll('.menu')
  const listItem = document.querySelectorAll('.list-item')
  for (let i = 0; i < threeDots.length; i++) {
    threeDots[i].addEventListener('mousedown', () => {
      menu[i].classList.add('active')
    })
    listItem[i].addEventListener('mouseleave', () => {
      menu[i].classList.remove('active')
    })
  }
  }
}

// add task function
function AddTask() {
  // to delete the unwanted spaces
  let userData = textBox.value.trim()
  if (!userData) {
    alert('please type the task to be added')
    textBox.value = ''
  } else {
    if (! isEdited) {
      // to add new task
      userDataInfo = { text: userData, status: 'pending' }
      listArray.push(userDataInfo)
    } else {
      // to edit an exsiting task
      listArray[editId].text = userData
      isEdited = false
    }
    localStorage.setItem('localStorageArray', JSON.stringify(listArray)) // to convert js object to json string
    textBox.value = ''
  }
  DisplayList("all")
}
addBtn.addEventListener('click', AddTask)

// delete task function
function DeleteTask(index) {
  listArray.splice(index, 1)
  localStorage.setItem('localStorageArray', JSON.stringify(listArray)) // to convert js object to json string
  textBox.value = ''
  DisplayList("all")
}

// update status function
function UpdateStatus(selectedTask) {
  // to get the list text containing element
  let taskText = selectedTask.nextElementSibling
  // to toggle checked class to the paragraph element and to reassign the list status
  if (selectedTask.checked) {
    taskText.classList.add('checked')
    listArray[selectedTask.id].status = "completed"
  } else {
    taskText.classList.remove('checked')
    listArray[selectedTask.id].status = "pending"
  }
  localStorage.setItem('localStorageArray', JSON.stringify(listArray)) // to convert js object to json string
}

// edit task function
function EditTask(taskText, index){
  // to display the selected task's text in the textBox
  textBox.value = taskText 
  // to focus the textBox when edit button is clicked
  textBox.focus()
  editId = index
  isEdited = true
}

// to clear local storage
clrBtn.addEventListener('click', ()=>{
  listArray.splice(0, listArray.length)
  localStorage.setItem('localStorageArray', JSON.stringify(listArray)) // to convert js object to json string
  DisplayList("all")
})
