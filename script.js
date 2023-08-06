const buttons = document.querySelectorAll(".buttons button");
const submit = document.getElementById("submit");
const error = document.getElementById("error-msg");
const selectionMsg = document.getElementById("selection-msg");
const face1 = document.getElementById("face-1");
const face2 = document.getElementById("face-2");
let selected = "";

buttons.forEach(btn => {
    btn.addEventListener("click" , (e)=>{
        removeSelectedClass();
        selected = e.target.textContent;
        e.target.classList.add("selected");
    })
});

submit.addEventListener("click" , (e)=>{
    if ( selected == ""){
        addButtonError();
        setTimeout(()=>{
            removeButtonError();
        },3000);
        return;
    }
    selectionMsg.textContent = `You selected ${selected} out of 5`;
    face1.classList.add("none");
    face2.classList.remove("none");
});

function addButtonError(){
    error.classList.remove("none");
    buttons.forEach(btn => {
        btn.classList.add("error");
    })
};

function removeButtonError(){
    error.classList.add("none");
    buttons.forEach(btn => {
        btn.classList.remove("error");
    })
};

function removeSelectedClass(){
    buttons.forEach(btn => {
        btn.classList.remove("selected");
    })
};