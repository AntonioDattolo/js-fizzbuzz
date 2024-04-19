const container = document.querySelector('div');

for (let i = 1; i < 100; i++) {

    if (i % i == 0 && i % 3 != 0 && i % 5 != 0 ) {
        console.log(i);
        const newItem = document.createElement('h6');
        container.append(newItem);
        newItem.innerHTML =` ${i}`;
        newItem.classList.add('m-1');
        newItem.classList.add('my-witdh');  
    }
    if (i % 3 == 0) {
        console.log("fizz");
        const newItem = document.createElement('h6');
        container.append(newItem);
        newItem.innerHTML = " fizz ";
        newItem.classList.add('m-1');
        newItem.classList.add('my-witdh');
        newItem.classList.add('fizz');
    }
    if (i % 5 == 0) {
        console.log("buzz");
        const newItem = document.createElement('h6');
        container.append(newItem);
        newItem.innerHTML = " buzz ";
        newItem.classList.add('m-1');
        newItem.classList.add('my-witdh');
        newItem.classList.add('buzz');
     }
}
