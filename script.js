const checkbox=document.querySelector(".checkbox")
const form=document.querySelector(".content-wrapper")
const change=document.querySelector(".button_change")


if(localStorage.getItem("isChecked")){
    checkbox.checked=true;
}
if (localStorage.getItem("bg")==="changed"){
    form.style.backgroundColor="rgba(60, 184, 120, 0.8)"}

checkbox.addEventListener("change",()=>{
    localStorage.setItem("isChecked",true)

})

change.addEventListener("click",()=>{

    if (localStorage.getItem("bg")==="changed"){
        localStorage.removeItem("bg")
        form.style.backgroundColor="#fff"

    }else {
        localStorage.setItem("bg","changed")
        form.style.backgroundColor="rgba(60, 184, 120, 0.8)"
    }
})