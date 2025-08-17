//vetor com as figuras
const fig = ["🎰", "🎲", "🎯","🃏", "💸", "🤑", "🎮", "🔄", "🎉"]

//pegando os campos das imagens
var fig1 = document.getElementById("fig1")
var fig2 = document.getElementById("fig2")
var fig3 = document.getElementById("fig3")

//add evento ao btn
const btn_sec = document.querySelector(".btn-secundary") //esse btn ta com a class "btn-hidden" pra deixar escondido
const btn = document.querySelector(".btn")
btn.addEventListener("click", () => {
    const indice1 = Math.floor(Math.random() * fig.length)
    const indice2 = Math.floor(Math.random() * fig.length)
    const indice3 = Math.floor(Math.random() * fig.length)

    fig1.innerHTML = `${fig[indice1]}`
    fig2.innerHTML = `${fig[indice2]}`
    fig3.innerHTML = `${fig[indice3]}`

    if (indice1 === indice2 && indice2 === indice3) {
        btn.classList.toggle("btn-hidden")
        btn_sec.classList.toggle("btn-hidden")
        const alerta = document.getElementById("alerta")
        alerta.style.display = "block"

        setTimeout(() => {
            alerta.style.display = "none"
        }, 3000)
    }
})

btn_sec.addEventListener("click", () => {
    btn.classList.toggle("btn-hidden")
    btn_sec.classList.toggle("btn-hidden")
})