const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    

//    PareseInt( document.querySelector(#height).value)
//    jisse jo bhi value parse karenge that must be an integer

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');


    if(height === '' || weight === '' || isNaN(height) || isNaN(weight)) {
        results.innerHTML = 'Please enter valid numbers for height and weight.';
    } else {
        const bmi = (weight / (height/100) ** 2);
        results.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
    

    if (bmi < 18.5) {
        results.innerHTML += '<p>You are underweight.</p>';
    }   else if (bmi >= 18.5 && bmi < 24.9) {  
        results.innerHTML += '<p>You are normal weight.</p>';
    } else if (bmi >= 25 && bmi < 29.9) {
        results.innerHTML += '<p>You are overweight.</p>';
    } 
    }

});