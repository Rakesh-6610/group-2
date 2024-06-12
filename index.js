gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let mm = gsap.matchMedia();




var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });










var h_hero = document.querySelector("#hero");
var body = document.querySelector("#rk");

const nav = document.querySelector(".mobile_nav");
const nav_icon = document.querySelector(".ope");
const load = document.querySelector(".loading");
const inner_circle = document.querySelector(".inner_circle");
const mobile_nav = document.querySelector(".mobile");



var h_height = h_hero.offsetHeight;
var h_body = body.offsetHeight;

load.style.height = h_body + "px";

function nav_open() {
    nav.style.transform = "scaleX(1)";
    nav_icon.style.display = "none";
    mobile_nav.style.justifyContent = "flex-end";
}
function nav_close() {
    nav.style.transform = "scaleX(0)"
    nav_icon.style.display = "inline";
    mobile_nav.style.justifyContent = "center";
}

let list = document.querySelector(".cat_list");
let learn = document.querySelector(".ca");
let learnm = document.querySelector(".cam");
let listm = document.querySelector(".cat_list_m");
let learn_count = 0;
learn.addEventListener("mouseenter", function() {
    list.style.transform = "scaleY(1)";
})
learn.addEventListener("mouseleave", function() {
    list.style.transform = "scaleY(0)";
})


learnm.addEventListener("click", function() {
    if (learn_count % 2 == 0) {
        listm.style.transform = "scaleY(1)";
    }
    else {
        listm.style.transform = "scaleY(0)";
    }
    learn_count++;
    console.log(learn_count)
})






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rain(){
    var rains = document.querySelectorAll(".rain");
    var raindrop = rains[Math.floor(Math.random() * 35)]
    gsap.set(raindrop, {
        opacity: 1
    })
    gsap.to(raindrop, {
        y: h_height + "px",
        duration: 9.2, //! controls how much rain can drop in a single second
        ease: "ease.in"
    })
    gsap.set(raindrop, {
        y: 0,
    })
    sleep(0).then(() => {rain()});
}
rain()

// const cursor = document.querySelector('[data-cursor-dot]');
// const cursorOutline = document.querySelector('[data-cursor-outline]');

// window.addEventListener('mousemove', function (e) {
//     const posX = e.clientX;
//     const posY = e.clientY;
//     console.log(posX)
//     console.log(posY)

    
//     cursor.style.left = `${posX}px`;
//     cursor.style.top = `${posY}px`;
    
    
    
//     gsap.to(cursorOutline, {
//         left: `${posX}px`,
//         top: `${posY}px`,
//         duration: 0.2
//     })
// })





function hero_num(ele, per) {
    let startingValue = 0,
        endingValue = per,
        speed = 8400;
    let progress = setInterval(() => {
        startingValue++
        if (startingValue == endingValue) {
            clearInterval(progress)
        }
        ele.innerHTML = startingValue
    }, speed)
    ele.classList.remove("her0_num");
}




var loading = gsap.timeline()

loading.set(".loading", {
    display: "flex"
})
.to(".blocks", {
    scale : 1.1,
    duration: 0.7,
    rotate : "180deg",
    width : "170px",
    height : "170px",
    // delay: 0.2
})
.to(".blocks",{
    scale : 1,
    duration: 0.7,
    rotate : "360deg",
    width: "150px",
    height: "150px", 
})
.to(".load", {
    width: "100%",
    ease: "expo.in",
    duration: 1.4
}, "-=1.6")
.to(".loading", {
    opacity: 0,
    duration: 0.3,
}, "-=0.2")
.set(".loading", {
    display: "none"
})
.fromTo("#header", {
    scaleY:0
}, {
    scaleY:1,
    duration: 0.5
})


const myText = new SplitType("#my-text")
var thome = gsap.timeline()


thome.to(".anib", {
    width:6 + "px",
    duration:1,
    delay:1.2,
    ease : "expo.in"
})
.to(".btn_block", {
    width: 0,
    duration: 1,
    ease : "expo.in"
})
mm.add("(max-width: 10000px)", () => {
    thome.to(".img_bg", {
        scale: 2,
        duration: 1
    }, "-=1")
})
mm.add("(max-width: 1600px)", () => {
    thome.to(".img_bg", {
        scale: 1.6,
    }, "-=1") 
})
mm.add("(max-width: 900px)", () => {
    thome.to(".img_bg", {
        scale: 1.4,
        duration: 1
    }, "-=1")
})
mm.add("(max-width: 450px)", () => {
    thome.to(".img_bg", {
        scale: 1.1,
        duration: 1
    }, "-=1")
})









// gsap.to(".char", {
//     y:0,
//     stagger: 0.02,
//     // delay: 0.2,
//     duration: 0.4,
//     scrollTrigger: "#my-text"
// })
// gsap.to(".hline1", {
//     width: "100%",
//     duration: 1,
//     delay: 0.4,
//     scrollTrigger : "#my-text"
// })




gsap.utils.toArray('.inner').forEach(inner=> {
    gsap.fromTo(inner,{
        width:0
    },{
        width:'30%',
        duration:2,
        scrollTrigger:inner,
        ease:'circ.out'
    })
})
gsap.fromTo('#circle',{
    scale:0
},{
    scale:1,
    duration:4
})
gsap.fromTo('#button',{
    opacity:0
},{
    opacity:1,
    duration:2
})
