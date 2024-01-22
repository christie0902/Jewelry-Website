function submitForm(clickData) {
  console.log(clickData);
}
const description = document.querySelectorAll(".new-in-description");
// Create an array of all elements with the class name
function myFunction(event) {
  const picIndex = event.srcElement.dataset.pic;
  // choose a data from the srcElement in the event from Console as the identifier for this logic
  // console.log(event.srcElement);
  description[+picIndex].classList.toggle("new-in-description-showed");
}
// + in front to change string into numbers

// for(let x of description) {
// x.classList.toggle('new-in-description-showed')} >> it works on all images at once

/* // data-pic="0"
    const productImg = document.querySelectorAll('.product_image img')
    productImg.forEach ((product,i) => {
        product.dataset.pic= i.toString();
    })
     */
