import './style.css'

// debug - red outline on all divs

// const allDivs = document.querySelectorAll('div');

// allDivs.forEach(
//     (el) => {
//         el.style.outline = "1px solid red";
//     }
// )

const form = document.querySelector("form");
const [titleInput, authorInput, numPagesInput] = [
    document.querySelector("#book-name-input"),
    document.querySelector("#author-input"),
    document.querySelector("#num-pages-input")
];
const recordList = document.querySelector('.right .bottom');

let title = titleInput.textContent
let author = authorInput.textContent;
let numPages = numPagesInput.textContent;

const createRecordComponent = () => {
    bookComponent = document.createElement('div');
    bookComponent.className = 'book-component';
    recordList.appendChild(bookComponent);
    bookComponent.innerHTML = `
    <p>${title}<span class=”label”>title</span></p>
    <p>${author}<span class=”label”>author</span></p>
    <p>${numPages}<span class=”label”># of pages</span></p>  
    `

    //styled in css
    return bookComponent;
}

const submitButton = document.querySelector('button');
submitButton.addEventListener('click', () => {
    createRecordComponent(title, author, numPages);
})