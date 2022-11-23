var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}
//function számitás() {



//}
window.onload = () => {
    for (var sor = 0; sor < 10; sor++) {

        var újdiv = document.createElement("div")
        újdiv.classList.add("sor")
        document.getElementById("Pascal").appendChild(újdiv)

        for (var oszlop = 0; oszlop <= sor; oszlop++) {

            var másikújdiv = document.createElement("div")
            másikújdiv.classList.add("elem")
            másikújdiv.innerHTML = `${sor}:${oszlop}`
            újdiv.appendChild(másikújdiv)
        }
    }
}









