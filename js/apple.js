//var
let num_1 = 1;

//add the number to p

let numbers = document.querySelector("#numbers");
console.log(numbers);
let test = numbers + 1;
console.log(test);

let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");

let price_V = document.querySelector('input[name="appleID"]:checked').value;
console.log(price_V);

let apples1 = document.querySelector("#apple1");
let apples2 = document.querySelector("#apple2");
let apples3= document.querySelector("#apple3");
let apples4 = document.querySelector("#apple4");

let priceDiv = document.querySelector("#price");

//price of first checked  appleID
apples_1_price = 60000;
//events

events();
function events() {
  plus.addEventListener("click", loop_plus);
  minus.addEventListener("click", loopMinus);
  document.addEventListener("DOMContentLoaded", addFunc);
  apples1.addEventListener("click", calculate);
  apples2.addEventListener("click", calculate);
  apples3.addEventListener("click", calculate);
  apples4.addEventListener("click", calculate);
}

//functions


//marboot be plus
function loop_plus() {
  num_1 = num_1 + 1;
  console.log(num_1);
  numbers.firstChild.remove();
  let numCreat = document.createElement("p");
  numCreat.innerHTML = `
    ${num_1}
    `;
  console.log(numCreat);
  numbers.append(num_1);
  let price = new Price(num_1,apples_1_price,priceDiv)
  price.times(num_1,apples_1_price,priceDiv)
}
//ezafe kardan 1 beine plus va minus
function addFunc() {
  let numCreat = document.createElement("p");
  numCreat.innerHTML = `
    ${num_1}
    `;
  numCreat.style.marginBottom = "0";
  numbers.appendChild(numCreat);
  let price = new Price (num_1, apples_1_price,priceDiv);
  price.addPrice(apples_1_price);
}
//marboot be minus
function loopMinus() {
  num_1 = num_1 - 1;
  numbers.firstChild.remove();
  let numCreat = document.createElement("p");
  numCreat.innerHTML = `
    ${num_1}
    `;
  console.log(numCreat);
  numbers.append(num_1);
  let price = new Price(num_1,apples_1_price,priceDiv)
  price.times(num_1,apples_1_price,priceDiv)
}
//hesab ketabe apple id haye mokhtalef
function calculate(){
    price_V = document.querySelector('input[name="appleID"]:checked').value;
    console.log(price_V)
    let apple2 = 360000;
    let apple3 = 30000;
    let apple4 = 20000;
    let parentDiv;
    let div_2;
    let num = document.querySelector("#numbers").textContent;
    switch (price_V) {
        case '2':
            apples_1_price = apple2 * num;
            console.log(apples_1_price)
            console.log(num)
            div_2 = document.createElement("div")
            div_2.innerHTML = `
              <p class="fs-2"> قیمت محصول : </p>
              <p class="fs-4"> <span>${apples_1_price}</span> &nbsp تومان </p>
              `;
            div_2.classList = 'price'
            parentDiv = priceDiv.parentNode;
            parentDiv.replaceChild(div_2,priceDiv)
            apples_1_price = apples_1_price / num
            priceDiv = div_2;
            break;
        case '3' :
            apples_1_price = apple3 * num;
            div_2 = document.createElement("div")
            div_2.innerHTML = `
              <p class="fs-2"> قیمت محصول : </p>
              <p class="fs-4"> <span>${apples_1_price}</span> &nbsp تومان </p>
              `;
            div_2.classList = 'price'
            parentDiv = priceDiv.parentNode;
            parentDiv.replaceChild(div_2,priceDiv)
            apples_1_price = apples_1_price / num
            priceDiv = div_2;
            break;
        case '4' :
            apples_1_price = apple4 * num;
            div_2 = document.createElement("div")
            div_2.innerHTML = `
              <p class="fs-2"> قیمت محصول : </p>
              <p class="fs-4"> <span>${apples_1_price}</span> &nbsp تومان </p>
              `;
            div_2.classList = 'price'
            parentDiv = priceDiv.parentNode;
            parentDiv.replaceChild(div_2,priceDiv)
            apples_1_price = apples_1_price / num
            priceDiv = div_2;
            break;
        case '1' :
          apples_1_price = 60000 * num;
          div_2 = document.createElement("div")
          div_2.innerHTML = `
            <p class="fs-2"> قیمت محصول : </p>
            <p class="fs-4"> <span>${apples_1_price}</span> &nbsp تومان </p>
            `;
          div_2.classList = 'price'
          parentDiv = priceDiv.parentNode;
          parentDiv.replaceChild(div_2,priceDiv)
          apples_1_price = apples_1_price / num
          priceDiv = div_2;
    }
}
//objects or classes
class Price {
  constructor(num_1, apples_1_price,priceDiv) {
    this.num_1 = num_1;
    this.apples_1_price = apples_1_price;
    this.priceDiv = priceDiv;
  }
  //add the price of first checked appleID when site loaded
  addPrice(apple1) {
    priceDiv.innerHTML = `
        <p class="fs-2"> قیمت محصول : </p>
        <p class="fs-4"> <span> ${apple1}</span>&nbsp تومان </p>
        `;
    priceDiv.classList = "price";
  }

  times(num,firstPrice,div){
    firstPrice = num * firstPrice;
    div.innerHTML =`
        <p class="fs-2"> قیمت محصول : </p>
        <p class="fs-4"> <span>${firstPrice}</span> &nbsp تومان </p>
    `
    div.classList = 'price'
    div = div;
  }
}
