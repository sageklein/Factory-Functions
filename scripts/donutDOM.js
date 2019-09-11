import donutHTML from "./donutHTML.js"

//Responsible for showing donut ion the DOM

const donutDOMBuilder = (donutObj) => {
    document.querySelector(".donut-container").innerHTML += donutHTML(donutObj)
}

export default donutDOMBuilder