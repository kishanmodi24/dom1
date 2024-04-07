var isStatus = document.querySelector("h3")
var addFriend = document.querySelector("#add")
var removeFriend = document.querySelector("#remove")

add.addEventListener("click",function(){
isStatus.innerHTML = "you now friends"
isStatus.style.color = "green"
})
removeFriend.addEventListener("click",function(){
    isStatus.innerHTML = "stranger now"
    isStatus.style.color = "red"
})