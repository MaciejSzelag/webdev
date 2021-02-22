const nav = document.querySelector(".navbar");
const arrow_down = document.querySelector(".arrow-down");
const header_class = document.querySelector(".header")



window.addEventListener("scroll", () => {
    if (scrollY>0) {
        nav.classList.add("navbar-scrolled");
       
    } else {
        nav.classList.remove("navbar-scrolled")
          }
   
        if (header_class.classList.contains("arrow-down")) {
            if (scrollY > 120) {
                arrow_down.classList.add("arrow-down-hidden");
            } else {
                arrow_down.classList.remove("arrow-down-hidden")
            }
        }
    
 
    const bx = document.querySelectorAll(".bx")
    const content = document.querySelector(".content")
    console.log(bx)
    for (let i = 0; i < bx.length; i++) {
        // setTimeout(() => {
        if (scrollY >= bx[i].offsetTop - content.clientHeight /2.5 ) {
            bx[i].classList.add("li-visible");
                  }
        // }, i * 1000);
      }
})