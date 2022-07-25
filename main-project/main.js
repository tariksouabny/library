import './style.css'

// debug - red outline on all divs

const allDivs = document.querySelectorAll('div');

allDivs.forEach(
    (el) => {
        el.style.outline = "1px solid red";
    }
)