var clock;
const intro = document.querySelector('.intro')
const skills = document.querySelector('.core-skills')
const projects = document.querySelector('.projects')
const contactForm = document.querySelector('.contact')
const name = document.querySelector('#name-box')
const gmail = document.querySelector('#email-box')
const subject = document.querySelector('#subject')
const msg = document.querySelector('#message')

const toScroll = () => intro.scrollIntoView({
    behavior: 'smooth',
    block: "start",
    inline: "nearest"
})

const toForm = () => contactForm.scrollIntoView({
    behavior: 'smooth',
    block: "start",
    inline: "center"
})

const toSkill = () => skills.scrollIntoView({
    behavior: 'smooth',
    block: "end",
    inline: "end"
})

const toProject = () => projects.scrollIntoView({
    behavior: 'smooth',
    block: "end",
    inline: "end"
})

function timeToString(nodeList) {
    let timeString = new Date().toLocaleTimeString('en-US', { hourCycle: 'h23' });
    let time = timeString.split(":");

    nodeList[0].innerHTML = time[0][0];
    nodeList[1].innerHTML = time[0][1];
    nodeList[2].innerHTML = time[1][0];
    nodeList[3].innerHTML = time[1][1];
}

const getTime = () => {
    let nodeList = document.querySelectorAll('.clock-number');
    if (nodeList.length != 0) {
        timeToString(nodeList);
        let current = new Date();
        clock = setInterval(newClock, 1000);

        function newClock() {
            let now = new Date();
            let dif = now - current;
            if (dif != 0) {
                timeToString(nodeList);
            }
        }
    }
}

function manipulateInput(e) {
    console.log("clicked")
    const inputNode = document.createElement("input");
    inputNode.type = "text";
    inputNode.width = "fit-content";
    const hrefNode = document.createElement("a");
    hrefNode.href = "javascript:void(0)";
    e.replaceChild(inputNode, e.firstElementChild);
    inputNode.focus();
    document.addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            hrefNode.innerHTML = inputNode.textContent;
            e.replaceChild(e.firstElementChild, hrefNode);
        }
    })
}

function toggleText(el) {
    el.parentElement.classList.toggle("expanded");
}

function sendMail(e) {
    e.preventDefault();
}

document.addEventListener("DOMContentLoaded", getTime);

window.onbeforeunload = (event) => {
    clearInterval(clock);
};