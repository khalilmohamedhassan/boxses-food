

    let navbar = document.querySelectorAll(".navbar li");
    // console.log(navbar)
    let boxses = document.querySelectorAll(".box");
//                   //
    navbar.forEach(function(element){
    element.addEventListener("click",function(e){
        navbar.forEach(function(li){
            li.classList.remove("active");
        })
        
        e.target.classList.add("active")
        

        
    boxses.forEach(function(el2){
    el2.style.display="none";

    })
    document.querySelectorAll(e.target.dataset.filter).forEach(function(li){
        li.style.display = "flex";
    })
    })

    })
