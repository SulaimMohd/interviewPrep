const names = []
let currentIndex = -1;
const root = document.getElementById("root");

const inputFiled = document.createElement("input");
inputFiled.placeholder = "Enter a name";
inputFiled.style = 'margin: 10px; padding:5px; font-size: 20px'

const button = document.createElement("button");
button.innerText = "Add "
button.style = "padding: 5px; font-size: 20px; cursor:pointer"

const showNames = document.createElement("div")
showNames.innerText = "Clike here"
showNames.style = "border: 2px solid black; padding: 40px; display:inline-block; margin-left:30px; background-color: lightGray; cursor:pointer;"

button.onclick = ()=>{
  let name = inputFiled.value;
  currentIndex = 0
  names.push(name)
  inputFiled.value = ''
  console.log(names)
}
showNames.onclick = ()=>{
  if(currentIndex === -1){
    showNames.innerText = "Please Enter the name first"
  }else if(currentIndex < names.length){
    showNames.innerText = names[currentIndex++]
  }else{
    showNames.innerText = "Finished"
  }
}
root.appendChild(inputFiled)
root.appendChild(button)
root.appendChild(showNames)
root.append()
// there are still bugs to fix it I think it's enough for the day *_- 
