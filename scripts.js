const form = document.querySelector('form')
const resultContainer = document.getElementById('result-container')
const input = document.getElementById('total-people')

function calculatePosition () {
    const total = Number(input.value)
    let value = total
    let result = 0
    value = Math.sqrt(value)
    value = Math.trunc(value)
    result = total - Math.pow(2, value)
    result = result*2 + 1
    return result
}

function renderResult (){
    resultContainer.innerHTML = ''
    const result = document.createElement('p')
    result.innerText = `The surviving position with ${input.value} is ${calculatePosition()}`
    resultContainer.appendChild(result)

}


form.addEventListener('submit', function(e){
    e.preventDefault()
    renderResult()
})
