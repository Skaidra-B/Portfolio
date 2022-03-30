const refs = document.querySelectorAll(".refs")
const main = document.querySelector(".main")
const experience = document.querySelector(".experience")
const education = document.querySelector(".education")
const skills = document.querySelector(".personalSkills")

refs[0].classList.add("colored-link")

function transition() {
    main.style.transition = ".4s"
    main.style.transitionTimingFunction = "ease-in"
}

function expLinks() {
    main.style.left = "-400px"
    transition()
    refs[1].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 1) refs[i].style.color = "#aaaaaa"
    }
}

function eduLinks() {
    main.style.left = "-1000px"
    transition()
    refs[2].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 2) refs[i].style.color = "#aaaaaa"
    }
}

function skillsLinks() {
    main.style.left = "-1600px"
    transition()
    refs[3].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 3) refs[i].style.color = "#aaaaaa"
    }
}
refs[0].onclick = () => {
    main.style.left = "200px"
    transition()
    refs[0].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 0) refs[i].style.color = "#aaaaaa"
    }
}
refs[1].onclick = () => {
    expLinks()
}
experience.onclick = () => {
    expLinks()
}
refs[2].onclick = () => {
    eduLinks()
}
education.onclick = () => {
    eduLinks()
}
refs[3].onclick = () => {
    skillsLinks()
}
skills.onclick = () => {
    skillsLinks()
}


