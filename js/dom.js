const hideList          =   document.getElementById("hideList");
const listDiv           =   document.querySelector(".list");
const myHeading         =   document.getElementById("myHeading");
const headingButton     =   document.getElementById("headingButton");
const myTextInput       =   document.getElementById("headingInput");
const students          =   document.getElementById("students");
const studentsButton    =   document.getElementById("studentsButton");
const myParagraph       =   document.getElementsByTagName("p");
const input             =   document.querySelector("#listButton");
const p                 =   document.querySelector("p.description");
const button            =   document.querySelector(".description");
const addItem           =   document.querySelector("input.addItemInput");
const addItemButton     =   document.querySelector("button.addItemButton");
const listUl            =   listDiv.querySelector("ul");
const listItems         =   document.getElementsByTagName("li");
const lis               =   listUl.children;
const firstListItem     =   listUl.firstElementChild;
const lastListItem      =   listUl.lastElementChild;

// Functionality test of selecting first/last;child
firstListItem.style.backgroundColor = "yellow";
lastListItem.style.backgroundColor = "green";
 // Listen for a click on listDiv Child listUl and removeChild
 for ( let i = 0; i < lis.length; i += 1) 
 {
     attachListItemButtons(lis[i]);
 }
listUl.addEventListener("click", (event) => 
{
    if (event.target.tagName == "BUTTON") 
    {
        if (event.target.className == "remove") {
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if (event.target.className == "up") {
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if (prevLi.textContent !== "NULL")
                {
                ul.insertBefore(li, prevLi);
                }
        }
    }
}
);

 // HideList button and reset
hideList.addEventListener("click", () => 
{
    if (listDiv.style.display === "none") {
        hideList.textContent = "Hide List";
        listDiv.style.display = "block";
    } else {
    hideList.textContent = "Show List";
    listDiv.style.display = "none";
}
})
 // change content of p (above input n list)
addEventListener("click", () =>{
    p.innerHTML = input.value + ":";
})

//Header color change
headingButton.addEventListener("click", () => 
{
    myHeading.style.color = myTextInput.value;
});


// Student project
studentsButton.addEventListener("click", () =>
{
    document.write(msg);
});

//appendChild to ul list and reset value of input
addItemButton.addEventListener("click", () => 
{
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.innerHTML = addItemInput.value;
    attachListItemButtons(li);
    ul.appendChild(li);
    addItemInput.value = '';

});

// Add button to Li Children
function attachListItemButtons (li) 
{
    let up      =   document.createElement("button");
    up.className = "up";
    up.textContent = "up";
    li.appendChild(up);
    let down    =   document.createElement("button");
    down.className = "down";
    down.textContent = "down";
    li.appendChild(down);
    let remove  =   document.createElement("button");
    remove.className = "remove";
    remove.textContent = "remove";
    li.appendChild(remove);
}




