input = document.getElementById("number")
submit = document.getElementById("submit")
output = document.getElementById("output")
console.log(output)

function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 ===0) {
        output.innerHTML += "<p>" + "fizzbuzz" + "</p>"
    } else if (num % 3 === 0) {
        output.innerHTML += "<p>" + "fizz" + "</p>"
    } else if (num % 5 === 0) {
        output.innerHTML += "<p>" + "buzz" + "</p>"
    } else {
        output.innerHTML += "<p>" + num.toString() + "</p>"
    }
}   

submit.addEventListener("click", (e) => {
    fizzbuzz(input.value)
});