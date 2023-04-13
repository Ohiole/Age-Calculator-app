const button = document.querySelector('.arrowButton');
const yearResult = document.getElementById('years');
const monthResult = document.getElementById('months');
const dayResult = document.getElementById('days');
const inputDay = document.getElementById('day');
const inputMonth =  document.getElementById('month');
const inputYear = document.getElementById('year');
const reqError = document.getElementById('errors');
const reqMonth = document.getElementById('errorsMonth');
const reqYear = document.getElementById('errorsYear');
const dayError = document.getElementById('valid');
const validDate = document.getElementById('dateValid');
const monthError = document.getElementById('validMonth');
const yearError = document.getElementById('validYear');

function checkDay(){
    let value = inputDay.value;
    if (value == '') {
        reqError.style.display = 'inline-block';
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else if (value < 1 || value > 31) {
        dayError.style.display = 'inline-block';
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else if(value > 30 && (inputMonth.value == 4 || inputMonth.value == 6 || inputMonth.value == 9 || inputMonth.value == 11)){
        inputDay.style.border = '1px solid hsl(0, 100%, 67%)';
        validDate.style.display = 'inline-block';
        return false;
    }
    else {
        return true;
    }
}

function checkMonth(){
    let value = inputMonth.value;
    if (value == '') {
        reqMonth.style.display = 'inline-block';
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else if (value < 1 || value > 12) {
        monthError.style.display = 'inline-block';
        inputMonth.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else {
        return true;
    }
}

function checkYear(){
   let value = inputYear.value;
   let presentYear = new Date().getFullYear();
   if (value == '') {
        reqYear.style.display = 'inline-block';
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else if (value > presentYear) {
        yearError.style.display = 'inline-block';
        inputYear.style.border = '1px solid hsl(0, 100%, 67%)';
        return false;
    } else {
        return true;
    }
}

function calcAge(birthday){
    let birthdate = new Date(birthday);
    let todayDate = new Date();

    let years = todayDate.getFullYear() - birthdate.getFullYear();
    let months =  todayDate.getMonth() - birthdate.getMonth();
    let dates = todayDate.getDate() - birthdate.getDate();

    // In case the birth month is after the current month, we would subtract a year

    if (months < 0 || (months === 0 && dates < 0)) {
        years--;
        if (months === 0) {
            months = 11;
        } else {
            months = 12 + months;
        }
        dates = 30 + dates;
    } 

    yearResult.innerHTML = years;
    monthResult.innerHTML = months;
    dayResult.innerHTML = dates;
}

button.addEventListener('click', function(e) {
    e.preventDefault();
    
    if(e){
        reqError.style.display = 'none';
        reqMonth.style.display = 'none';
        reqYear.style.display = 'none';
        dayError.style.display = 'none';
        validDate.style.display = 'none';
        inputDay.style.border = '1px solid hsl(0, 0%, 86%)'
    };


    let day = checkDay();
    let month = checkMonth();
    let year = checkYear();
    if (!day|| !month || !year) {
        return
    };
    let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
    calcAge(birthday);
})

