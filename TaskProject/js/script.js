let body = document.querySelector("#body")
let loading = document.querySelector("#loading")

window.onload = ()=>{
    setTimeout(()=>{
       loading.style.display = "none"
       body.style.display = "block"
    },5000)
}