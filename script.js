let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2")
let input3 = document.querySelector(".input3")
let btnCreate = document.querySelector(".btn")
let contacts = document.querySelector(".contacts")
read()
btnCreate.addEventListener("click",()=>{
    let obj = {
        name:input1.value,
        email:input2.value,
        image:input3.value,
    }
    let data = JSON.parse(localStorage.getItem("contact")) || []
    data.push(obj)
    localStorage.setItem("contact",JSON.stringify(data))
    read()
})

function read(){
    
    let newData = JSON.parse(localStorage.getItem("contact")) || []
    contacts.innerHTML = ""
newData.forEach((el,index) => {
    let info = document.createElement("div")
    let infoImg = document.createElement("div")
    let infoText = document.createElement("div")
    let infoBtn = document.createElement("div")
    let name = document.createElement("p")
    let email = document.createElement("p")
    let img = document.createElement("img")
    let btnDel = document.createElement("button")


info.classList.add("info")
infoImg.classList.add("infoImg")
infoText.classList.add("infoText")
infoBtn.classList.add("infoBtn")
btnDel.classList.add("btnDel")



name.innerText = el.name
email.innerText = el.email
img.src = el.image
btnDel.innerHTML = `<ion-icon name="trash-outline"></ion-icon>`


infoText.append(name)
infoText.append(email)
infoImg.append(img)
infoBtn.append(btnDel)
info.append(infoImg)
info.append(infoText)
info.append(infoBtn)
contacts.append(info)

btnDel.addEventListener("click",()=>{
    deleteContact(index)
})
});
}
function deleteContact(id){
    let data = JSON.parse(localStorage.getItem("contact")) || []
data.splice(id, 1)
localStorage.setItem("contact",JSON.stringify(data))
read()
}