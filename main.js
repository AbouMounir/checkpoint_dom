
const element = document.querySelectorAll(".minus");
const elements = document.querySelectorAll(".plus");
const elt = document.querySelectorAll(".number");
const prix_total = document.querySelectorAll(".prix_total");
const prix = document.querySelectorAll(".prix");
const sum = document.querySelector(".sum");
const add_article = document.querySelector(".add");

for (let index = 0; index < prix_total.length; index++) {
    prix_total[index].innerHTML = Number(elt[index].innerHTML) * Number(prix[index].innerHTML)
}
for (let index = 0; index < prix_total.length; index++) {
    sum.innerHTML = Number(sum.innerHTML) + Number(prix_total[index].innerHTML);
}
function sum_total( ) {
    sum.innerHTML = 0 ;
    for (let index = 0; index < prix_total.length; index++) {
        sum.innerHTML = Number(sum.innerHTML) + Number(prix_total[index].innerHTML);
    }
}

for (let item = 0; item < elements.length; item++) {
    elements[item].addEventListener("click", () => {
        elt[item].innerHTML = Number(elt[item].innerHTML) + 1 ;
        prix_total[item].innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML)
    })
    elements[item].addEventListener("click", sum_total)
} 

for (let item = 0; item < element.length; item++) {
    element[item].addEventListener("click", () => {
        elt[item].innerHTML = Number(elt[item].innerHTML) - 1 ;
        prix_total[item].innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML)
    })
    element[item].addEventListener("click", sum_total)
}

add_article.addEventListener("click", add_function);
function add_function() {
    const tbody_elt = document.querySelector("tbody");
    const tr_old = tbody_elt.querySelector("tr");
    let new_tr = document.createElement("tr");
    tbody_elt.prepend(new_tr);
    new_tr.innerHTML = tr_old.innerHTML ;
    const tr_list = tbody_elt.querySelectorAll("tr");
    tr_list[0].querySelector("p").innerHTML = document.querySelector(".new_article").innerHTML;
    tr_list[1].querySelector(".number").innerHTML = document.querySelector(".price_new_article").innerHTML;
}