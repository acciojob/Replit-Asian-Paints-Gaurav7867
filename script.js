//your JS code here. If required.
const gridContainer=document.querySelector(".grid");
for(let i=1;i<=9;i++){
const gridItem=document.createElement("div");
gridItem.id=i;
gridItem.innerText=i;
gridItem.className="grid-item"
gridContainer.appendChild(gridItem);
}


let previousSelectedElement=null;
const form=document.querySelector("#form")
form.addEventListener("submit",function(event){
event.preventDefault();
let cellid=form.inputid.value;
let selectedcolor=form.colorid.value;
let cell=document.getElementById(cellid);
cell.style.backgroundColor=selectedcolor;
	if(previousSelectedElement){
    previousSelectedElement.style.backgroundColor="white";
}


previousSelectedElement=cell;
});




document.addEventListener("contextmenu",(event)=>{
// event.preventDefault();
console.log("inside context");
});