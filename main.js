const container = document.querySelector('div');

for (let i = 1; i < 100; i++) {

    if (i % i == 0 && i % 3 != 0 && i % 5 != 0 ) {
        console.log(i);
        const newLi = document.createElement('h6');
        container.append(newLi);
        newLi.innerHTML =` ${i}`;
        newLi.classList.add('m-1');
        newLi.classList.add('my-witdh');
        
    }
    if (i % 3 == 0) {
        console.log("fizz");
        const newLi = document.createElement('h6');
        container.append(newLi);
        newLi.innerHTML = " fizz ";
        newLi.classList.add('m-1');
        newLi.classList.add('my-witdh');
        




    }
    if (i % 5 == 0) {
        console.log("buzz");
        const newLi = document.createElement('h6');
        container.append(newLi);
        newLi.innerHTML = " buzz ";
        newLi.classList.add('m-1');
        newLi.classList.add('my-witdh');

     }
   

}
