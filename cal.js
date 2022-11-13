console.log("helloWorld");
let string = "";
let buttons = document.querySelectorAll('#btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
    })
})
