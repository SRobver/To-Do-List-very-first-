let todoItemsContainer=document.getElementById("todoItemsContainer");

let todoElement=document.createElement("li");
todoElement.classList.add("to-do-item-container", "d-flex","flex-row");
todoItemsContainer.appendChild(todoElement);

let inputElement=document.createElement("input");
inputElement.type="checkbox";
inputElement.id="checkboxInput";
inputElement.classList.add("checkbox-input");
todoElement.appendChild(inputElement);

let labelContainer=document.createElement("div");
labelContainer.classList.add("label-container","d-flex","flex-row");
todoElement.appendChild(labelContainer);

let labelElement=document.createElement("label");
labelElement.classList.add("checkbox-label");
labelElement.setAttribute("for","checkboxInput");
labelElement.textContent="Learn HTML";
labelContainer.appendChild(labelElement);
