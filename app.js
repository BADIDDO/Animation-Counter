let counter = document.querySelectorAll(".counter");


counter.forEach(count => {
const speed = 200;
    const update = () => {
        let target = count.getAttribute("data-count");  // 256434
        let data = +count.textContent; // 0
        let increment = Math.ceil(target / speed);   // Somme Speed
console.log(increment);
        if (data < target) {
count.textContent = data + increment ;
setTimeout(update , 1)
        } else {
            count.textContent = target ;
        }
    }

    update();
})










/*
let count = document.querySelectorAll(".counter");

count.forEach(counter => {

    const speed = 200;
    const update = () => {
        let target = counter.getAttribute("data-count");
        let count = +counter.textContent;
        let increment = Math.ceil(target / speed);

        if (count < target) {
            counter.textContent = count + increment ;
            setTimeout(update , 1)
        } else {
counter.textContent = target ;
        }
    }
    update();
})
*/

