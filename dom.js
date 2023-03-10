let btnPlusAll = document.querySelectorAll(".plus");
let btnMinusAll = document.querySelectorAll(".minus");
let btnDeleteAll = document.querySelectorAll(".delete");
let btnAdd = document.querySelector(".add");
let btnPrix = document.querySelectorAll(".prix_total");
let sum = document.querySelector(".sum");

btnPlusAll.forEach((btn) => {btn.addEventListener("click", increaseFunction)});
btnMinusAll.forEach((btn) => {btn.addEventListener("click", decreaseFunction)});
btnDeleteAll.forEach((btn) => {btn.addEventListener("click", deleteArticle)})
btnAdd.addEventListener("click", addArticle);

function varBtn() {
    let btnPlusAll = document.querySelectorAll(".plus");
    let btnMinusAll = document.querySelectorAll(".minus");
    let btnDeleteAll = document.querySelectorAll(".delete");
    let btnAdd = document.querySelector(".add");
    let btnPrix = document.querySelectorAll(".prix_total");
    let sum = document.querySelector(".sum");
    btnPlusAll.forEach((btn) => {btn.addEventListener("click", increaseFunction)});
    btnMinusAll.forEach((btn) => {btn.addEventListener("click", decreaseFunction)});
    btnDeleteAll.forEach((btn) => {btn.addEventListener("click", deleteArticle)})
    btnAdd.addEventListener("click", addArticle);
}


function addArticle() {
    let name_article = document.querySelector(".new_article");
    let price_new_article = document.querySelector(".price_new_article");
    document.querySelector(".all_products").innerHTML = document.querySelector(".all_products").innerHTML +'<tr><td class="article"><p>' + name_article.value + '</p><p class="delete"> Supprimer </p></td><td><div class="quantity_container"><div class="minus"> - </div><input type="number" class="quantity" readonly placeholder="Unit price" value="1" ><div class="plus"> + </div></div></td><td class="prix">' + price_new_article.value + ' fr </td><td class="prix_total">' + price_new_article.value + ' fr </td></tr>'; 
    varBtn();
    totalPrice();
}

function deleteArticle() {
    this.parentElement.parentElement.remove();
    varBtn();
    totalPrice();
}

function increaseFunction() {
    this.previousElementSibling.value = parseInt(this.previousElementSibling.value) + 1 ;
    varBtn();
    calculPriceP(this);
    totalPrice();
}

function decreaseFunction() {
    if (this.nextElementSibling.value > 0) {
        this.nextElementSibling.value = parseInt(this.nextElementSibling.value) - 1 ;
        varBtn();
        calculPriceM(this);
        totalPrice();
    }
}


function calculPriceP(elt) {
    let qty = parseInt(elt.previousElementSibling.value);
    let price = parseInt(elt.parentElement.parentElement.nextElementSibling.innerHTML);
    elt.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = price * qty + " fr";
}
function calculPriceM(elt) {
    let qty = parseInt(elt.nextElementSibling.value);
    let price = parseInt(elt.parentElement.parentElement.nextElementSibling.innerHTML);
    elt.parentElement.parentElement.nextElementSibling.nextElementSibling.innerHTML = price * qty + " fr";
}

function totalPrice() {
    sum.innerHTML = 0 ;
    let btnPrix = document.querySelectorAll(".prix_total");
    btnPrix.forEach((elt) => {sum.innerHTML = parseInt(sum.innerHTML) + parseInt(elt.innerHTML) + " fr"});
}
