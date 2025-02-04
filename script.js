const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    if (inputBox.value.trim() === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; // Unicode for multiplication sign (close button)
        li.appendChild(span);

        inputBox.value = ""; // Clear the input box after adding the item
        saveData();
    }
});

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName==="SPAN"){

        e.target.parentElement.remove();
        saveData();

    }
},false);


const saveData=()=>{
    localStorage.setItem("data",listContainer.innerHTML);
    // console.log(localStorage.getItem("data"));

}

const displayTask=()=>{
    listContainer.innerHTML=localStorage.getItem("data");
}
displayTask();