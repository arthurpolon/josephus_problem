const form = document.querySelector('form')
const resultContainer = document.getElementById('result-container')
const input = document.getElementById('total-people')

function calculatePosition () {
    const total = Number(input.value)
    result = 1;
    do{
        result = result*2
    }while(total >= result)
    result = total - (result/2)
    result = result*2 + 1
    return result
}

function renderResult (){
    document.getElementById("result").innerHTML = `The surviving position with ${input.value} people is ${calculatePosition()}`
}


form.addEventListener('submit', function(e){
    e.preventDefault()
    renderResult()
})
