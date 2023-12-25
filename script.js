let globalIdCount = 0;


const state = [];

function createChildDiv(todoObj){
    let child = document.createElement("div")
    child.setAttribute("class",`todo-card`);
    
    let firstGrandChild = document.createElement('div');
    firstGrandChild.setAttribute('style','background-color:white;padding: 10px;font-size:18px;font-weight:700')
    firstGrandChild.innerHTML = todoObj.title;
    
    let secondGrandChild = document.createElement('div');
    secondGrandChild.setAttribute('style','background-color:white;padding: 10px;font-size:18px')
    secondGrandChild.innerHTML = todoObj.desc;
    
    let doneBtn = document.createElement('button')
    doneBtn.setAttribute('style','background-color:green;padding: 10px;font-size:18px;border-radius:30px')
    doneBtn.innerText = 'Mark as Done';
    doneBtn.setAttribute('id', `btn-${todoObj.id}`)
    doneBtn.setAttribute('onclick', `remove(${todoObj.id})`)
    
    child.appendChild(firstGrandChild)
    child.appendChild(secondGrandChild)
    child.appendChild(doneBtn)

    return child;
}

function render(){
    let display = document.getElementById('current-todo')
    display.innerHTML = "";
    for(let o of state){
        if(!o)continue;
        let todo = createChildDiv(o);
        display.appendChild(todo);
    }
}

function addToDo() {
    const tempObj = {
        id: 0,
        title: "",
        desc: ""
    };
    tempObj.id = ++globalIdCount;
    tempObj.title = document.getElementById('title').value;
    tempObj.desc = document.getElementById('desc').value;
    state.push(tempObj);
}

function remove(id){
    state.splice(state.findIndex(obj=>obj.id===id),1);
}

function toggle(){
    document.getElementById("desc").focus()
}

setInterval(()=>{render()},500);