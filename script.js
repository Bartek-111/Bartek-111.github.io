console.log("hello world")
let ania = { age: 12 };
let basia = { age: 22 };
let maciek = { age: 18 };
function checkIsLegalToDrink(person){
    // jezeli wiecej lub rowno niz 18 napisz legalne
    // jezeli nie to napisz niestety brakuje ci jeszcze x lat
    if(person.age >= 18){
        console.log("legalne")
    }
    if(person.age < 18)
    {
        let diffrence = 18 - person.age;
        console.log(`niestety brakuje ci jeszcze ${diffrence} lat`)
    }
}
console.log("basia")
checkIsLegalToDrink(basia);
console.log("ania")
checkIsLegalToDrink(ania);
console.log("maciek")
checkIsLegalToDrink(maciek);

function changeElementByPerson(person){
    //document.getElementById("person").innerText
    if(person.age >= 18)   {
        let element = document.getElementById("person");
        element.innerText ="legalne"
    } 
    if(person.age < 18)   {
        let element = document.getElementById("person");
        let diffrence = 18 - person.age;
        element.innerText =`niestety brakuje ci jeszcze ${diffrence} lat`
    } 
}

document.getElementById("maciek").onclick = () => {
    changeElementByPerson(maciek)
}
document.getElementById("ania").onclick = () => {
    changeElementByPerson(ania)
}
document.getElementById("basia").onclick = () => {
    changeElementByPerson(basia)
}
document.getElementById("check").onclick = () => {
    let input = document.getElementById("wiek");
    let rawValue = input.value;
    let wiek = parseInt(rawValue);
    if(isNaN(wiek)){
        let element = document.createElement("p");
        let historyElement = document.getElementById("history");
        element.classList.add("error")
        element.innerText = `Błędna wartość w polu sprawdź wiek '${rawValue}' nie jest prawidłowym wiekiem`
        historyElement.insertBefore(element, historyElement.firstChild)
        setTimeout(()=>{
            historyElement.removeChild(element)
        }, 10 * 1000);
        return;
    }
    if(wiek < 0)
    {let element = document.createElement("p");
    let historyElement = document.getElementById("history");
    element.classList.add("error")
        element.innerText = `Błędna wartość w polu sprawdź wiek '${rawValue}' jest ujemna`
        historyElement.insertBefore(element, historyElement.firstChild)
        setTimeout(()=>{
            historyElement.removeChild(element)
        }, 10 * 1000);
        return;


    }
    if(wiek >= 18){
        let element = document.createElement("p");
        let historyElement = document.getElementById("history");
        element.classList.remove("error")
        element.innerText = "legalne"
        historyElement.insertBefore(element, historyElement.firstChild)
        setTimeout(()=>{
            historyElement.removeChild(element)
        }, 10 * 1000);
        return;
    }
    if(wiek < 18){
        let element = document.createElement("p");
        let historyElement = document.getElementById("history");
        let diffrence = 18 - wiek;
        element.classList.remove("error")
        element.innerText =`niestety brakuje ci jeszcze ${diffrence} lat` 
        historyElement.insertBefore(element, historyElement.firstChild)
        setTimeout(()=>{
            historyElement.removeChild(element)
        }, 10 * 1000);
        return;

    }
}