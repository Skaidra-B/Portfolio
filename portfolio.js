const refs = document.querySelectorAll(".refs")

const main = document.querySelector(".main")

const experience = document.querySelector(".experience")
const education = document.querySelector(".education")
const skills = document.querySelector(".personalSkills")
// const introduction = document.querySelector(".introduction")

refs[0].classList.add("colored-link")

// about.style.backgroundColor = "#ee6817" // pilka
// experience.style.backgroundColor = "#aaaaaa"
// portfolio.style.backgroundColor = "#434242"

function expLinks() {
    main.style.left = "-400px"
    refs[1].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 1) refs[i].style.color = "#aaaaaa"
    }
}

function eduLinks() {
    main.style.left = "-1000px"
    refs[2].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 2) refs[i].style.color = "#aaaaaa"
    }
}

function skillsLinks() {
    main.style.left = "-1600px"
    refs[3].style.color = "#ee6817"
    for (const index in refs) {
        let i = Number(index)
        if (i !== 3) refs[i].style.color = "#aaaaaa"
    }
}
refs[0].onclick = () => {
    main.style.left = "200px"
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

/////////// veikianti dalis

// refs[1].onclick = () => {
//     main.style.left = "-400px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#ee6817"
//     refs[2].style.color = "#aaaaaa"
//     refs[3].style.color = "#aaaaaa"
// }
// experience.onclick = () => {
//     main.style.left = "-400px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#ee6817"
//     refs[2].style.color = "#aaaaaa"
//     refs[3].style.color = "#aaaaaa"
// }

// refs[2].onclick = () => {
//     main.style.left = "-1000px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#aaaaaa"
//     refs[2].style.color = "#ee6817"
//     refs[3].style.color = "#aaaaaa"
// }
// education.onclick = () => {
//     main.style.left = "-1000px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#aaaaaa"
//     refs[2].style.color = "#ee6817"
//     refs[3].style.color = "#aaaaaa"
// }

// refs[3].onclick = () => {
//     main.style.left = "-1600px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#aaaaaa"
//     refs[2].style.color = "#aaaaaa"
//     refs[3].style.color = "#ee6817"
// }
// skills.onclick = () => {
//     main.style.left = "-1600px"
//     refs[0].style.color = "#aaaaaa"
//     refs[1].style.color = "#aaaaaa"
//     refs[2].style.color = "#aaaaaa"
//     refs[3].style.color = "#ee6817"
// }

//////// pasidaryti su ifais refu color

// for (const index in refs) {
//     refs[index].onclick = () => {
//         let i = Number(index)
//         // refs[index].style.color = "#ee6817" // veikia
//
//         if (i === 0) {
//             refs[i].style.color = "#ee6817"
//         }
//         if (i === 1) {
//             refs[i].style.color = "#ee6817"
//         }//
//     }
// }


