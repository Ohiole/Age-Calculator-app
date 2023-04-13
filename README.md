# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![Screenshot 2023-04-12 at 21-05-58 Age Calculator App](https://user-images.githubusercontent.com/67792211/231572343-b35598ac-8bd8-42af-92a9-72d3eb18dc80.png)


### Links

- Solution URL:(https://github.com/Ohiole/Age-Calculator-app/)
- Live Site URL:(https://ohiole.github.io/Age-Calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

I learnt about the getFullYear(), getMonth(), getDate() functions in javascript

```css
::placeholder{
    font-size: 17px;
    font-weight: 700; 
    color: hsl(0, 0%, 59%);
}
```
```js
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


```


### Continued development

Practising more on javascript in-built functions
### Useful resources

- [Example resource 1](https://www.youtube.com) - This helped me with the javascript

## Author

- Frontend Mentor - [@Ohiole](https://www.frontendmentor.io/profile/Ohiole)
