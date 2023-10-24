var image_wrap = document.querySelector(".image-wrap");

let timeline = gsap.timeline();

timeline
    .to(".image-wrap", {
        height: "550px",
        duration: 1.5,
        backgroundSize: "110%",
        ease: "power4.inOut",
    })
    .to(".image-wrap", {
        height: "250px",
        backgroundPosition: "50% 30%",
        duration: 1.3,
        y: "0",
        ease: "power3.inOut",

    }, 1.5)
    .from(".big-name", {
        y: getYDistance(".big-name"),
        duration: 1.3,
        ease: "power3.inOut",
    }, 1.5)
    .from(".hide", {
        opacity: "0",
        duration: 1.3,
        ease: "power3.inOut",
    }, 1.5);

function getYDistance(el) {
    return window.innerHeight - document.querySelector(el).getBoundingClientRect().top
}

image_wrap.addEventListener("mousemove", (e) => {
    let rect = image_wrap.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    let xSpeed = 0.008,
        ySpeed = 0.02;

    let xMoving = x - image_wrap.clientWidth / 2;
    let yMoving = y - image_wrap.clientHeight / 2;

    image_wrap.style.backgroundPosition = `calc(50% + ${xMoving * xSpeed}px) calc(30% + ${yMoving * ySpeed}px)`;
    
});

image_wrap.addEventListener("mouseover", () => {
    image_wrap.style.transition = ".2s background-position";
    setTimeout(() => {
        image_wrap.style.transition = "0s background-position";
    },200);
});

image_wrap.addEventListener("mouseout", () => {
    image_wrap.style.transition = ".5s background-position";
    image_wrap.style.backgroundPosition = "50% 35%";
});

setTimeout(() => {
    image_wrap.style.pointerEvents = "auto";
}, timeline.endTime() * 1000);




let sections = document.querySelectorA11('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window. scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        // if want to use repeating animation
        else {
            sec.classList. remove('show-animate');
        }
    })
}
