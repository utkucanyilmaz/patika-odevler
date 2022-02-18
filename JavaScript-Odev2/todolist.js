let taskDOM = document.querySelector("#task")
let buttonDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let ulLength = document.getElementsByTagName("li")

for(let i = 0; i < ulLength.length; i++){
    let closeButton = document.createElement("span")
    closeButton.textContent = "\u00D7"
    closeButton.classList.add("close")
    closeButton.onclick = removeButton
    ulLength[i].append(closeButton)
    ulLength[i].onclick = check
}

buttonDOM.addEventListener('click', elementEkle)

function check(){
    this.classList.toggle("checked")
}

function removeButton(){
    this.parentElement.remove()
}

function elementEkle(){

    if(taskDOM.value == "" || taskDOM.value == " " ){

        $(".error").toast("show")

    } else {

        $(".success").toast("show")
        let liDOM = document.createElement("li")
        listDOM.appendChild(liDOM)
        liDOM.innerHTML = task.value
        taskDOM.value = ""

        liDOM.onclick = check

        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7"
        closeButton.classList.add("close")
        closeButton.onclick = removeButton

        liDOM.append(closeButton)
        listDOM.append(liDOM)
        inputElement.value = ("")
   
    }
}