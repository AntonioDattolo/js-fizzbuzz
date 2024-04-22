const container = document.querySelector('div');

for (let i = 1; i <= 100; i++) {

    const newItem = document.createElement('h6');
    container.append(newItem);
    newItem.classList.add('m-1');
    newItem.classList.add('my-witdh'); 

    if (i % 5 == 0 && i % 3 == 0) {
        console.log("fizzbuzz");
        newItem.innerHTML = "FizzBuzz";
        newItem.classList.add('fizzbuzz');
    }
    else if (i % 3 == 0) {
        console.log("fizz");
        newItem.innerHTML = " fizz ";
        newItem.classList.add('fizz');
    }
    else if (i % 5 == 0) {
        console.log("buzz");
        newItem.innerHTML = " buzz ";
        newItem.classList.add('buzz');
    }
    else if (i % i == 0 && i % 3 != 0 && i % 5 != 0 ) {
        console.log(i);
        newItem.innerHTML =` ${i}`;
    }

}
