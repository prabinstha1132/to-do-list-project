const input_item = document.getElementById("add-items");
const listedItem = document.getElementById("list");
function addTask() {
  if (input_item.value == "") {
    alert("you must write something!");
    return false;
  } else {
    let li = document.createElement("li"); //li vanne variable create garyo li create garera li variablema store li vanne html tag create gareko //
    li.innerHTML = input_item.value; //yo vaneko chai text store garnalai ho userle input ma halda//
    listedItem.appendChild(li); //yo vaneko chai input add garnalai ho li should be display in list class//
    const span = document.createElement("span");//span tag create gar vaneko //
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input_item.value = "";
  saveData();//input value empty garaunalai ho//
}
listedItem.addEventListener(
  "click",(e)=>{
    if (e.target.tagName == "LI") {//li ma click gareko xa ki xaina vanera check garxa //
      e.target.classList.toggle("checked");  // gareko xa vane yesle add garxa toggle le class checked xa teha vane yesle hatauxa// 
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();    //here parentelement vaneko chai li element ho yesle delete garxa //
      saveData();
    }
  },
false
);
const saveData=()=>{
    localStorage.setItem("data" ,listedItem.innerHTML)   //to save data//
}
const showList=()=>{

    listedItem.innerHTML=localStorage.getItem('data');
}
showList();