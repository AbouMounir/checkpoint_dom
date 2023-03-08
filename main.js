
const element = document.querySelectorAll(".minus");
const elements = document.querySelectorAll(".plus");
const elt = document.querySelectorAll(".number");
const prix_total = document.querySelectorAll(".prix_total");
const prix = document.querySelectorAll(".prix");
const sum = document.querySelector(".sum");

for (let index = 0; index < prix_total.length; index++) {
    let item = document.createElement("span")
    item.innerHTML = Number(elt[index].innerHTML) * Number(prix[index].innerHTML) +" " + "fr"
    prix_total[index].append(item)
}
for (let index = 0; index < prix_total.length; index++) {
    sum.innerHTML = Number(sum.innerHTML) + Number(elt[index].innerHTML) * Number(prix[index].innerHTML);
}

for (let item = 0; item < elements.length; item++) {
    elements[item].addEventListener("click", () => {
        elt[item].innerHTML = Number(elt[item].innerHTML) + 1 ;
        let items = document.createElement("span")
        items.innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML) +" " + "fr"
        prix_total[item].innerHTML = items.innerHTML
        sum.innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML);
    })
}

for (let item = 0; item < element.length; item++) {
    element[item].addEventListener("click", () => {
        elt[item].innerHTML = Number(elt[item].innerHTML) - 1 ;
        let items = document.createElement("span")
        items.innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML) +" " + "fr"
        prix_total[item].innerHTML = items.innerHTML
        sum.innerHTML = Number(elt[item].innerHTML) * Number(prix[item].innerHTML);
    })
}
 