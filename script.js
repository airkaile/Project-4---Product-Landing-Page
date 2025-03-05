let submitButton = document.getElementById("submit"); /* Select a Single Element */
let navBar = document.getElementsByTagName("div") /* Select Multiple Elements */

console.log(navBar)

document.getElementById("product_description").style.color = "#e5e5e5"; /* Modify Text Element */
document.getElementsByTagName("div")[0].style.backgroundColor = "#dd2020"; /* Modify Element (Div) Style */

/* Alert for Button Click */
function submitSuccess() {
    alert("Email Submitted!")
}

document.getElementById("submit").addEventListener('click', submitSuccess)