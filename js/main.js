
// setTimeout(()=>{})
// const container = document.querySelector(".container")
// const body_100 = () => {
 
//     container.style.setProperty("height", "100vh")
// setTimeout(() => {
//     container.style.setProperty("height", "auto")
// },1500)


// }
// body_100();



const nav = document.querySelector(".navbar");
const arrow_down = document.querySelector(".arrow-down");
const header_class = document.querySelector(".header")
let scroll_progress = document.querySelector(".scroll-progress")



window.addEventListener("scroll", () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scroll_progress.style.setProperty("width", `${scrolled}%`)



    if (scrollY>0) {
        nav.classList.add("navbar-scrolled");
       
    } else {
        nav.classList.remove("navbar-scrolled")
    }
   
       
    if (scrollY > 120) {
        arrow_down.classList.add("arrow-down-hidden");
    } else {
        arrow_down.classList.remove("arrow-down-hidden")
    }
        
    
 
    const bx = document.querySelectorAll(".bx")
    const content = document.querySelector(".content")
    console.log(bx)
    for (let i = 0; i < bx.length; i++) {
        // setTimeout(() => {
        
        if (window.innerHeight >= 1300) {
            if (scrollY >= bx[i].offsetTop - content.clientHeight-300) {
                bx[i].classList.add("li-visible");
            }  else if (scrollY <= bx[i].offsetTop - content.clientHeight - 600) {
                bx[i].classList.remove("li-visible");
            }
        } else {
            if (scrollY >= bx[i].offsetTop - content.clientHeight / 1.9  ) {
                bx[i].classList.add("li-visible");
            } else if (scrollY <= bx[i].offsetTop - content.clientHeight + 100) {
                bx[i].classList.remove("li-visible");
            }

        }
      
        // }, i * 1000);
      }
})


const bar_menu = document.querySelector(".bars-container");
const bar_menu_ul_container = document.querySelector(".nav-ul-media");
const bar_menu_ul_li_a = document.querySelectorAll(".a-hide");


bar_menu.addEventListener("click", () => {
    bar_menu.classList.toggle("crossed-bars")
    bar_menu_ul_container.classList.toggle("nav-ul-media-show")

    setTimeout(() => {
        for (let i = 0; i < bar_menu_ul_li_a.length; i++) {
            setTimeout(() => {
                bar_menu_ul_li_a[i].classList.toggle("a-opacity-1")
            }, i * 100)
        }
    },800)



})