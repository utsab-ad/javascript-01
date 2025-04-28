let butn = document.getElementById("btn")

butn.addEventListener("dblclick", ()=> {
    confirm("You want to change? ");

    document.querySelector(".box").innerHTML = "<b>Thanks for double clicking.</b>";

})

