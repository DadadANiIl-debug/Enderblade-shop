const tRes = document.getElementById('totres')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submit = document.getElementById('submit')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
let action = '+'

plus.onclick = function () {
    action = '+'
}

minus.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        tRes.style.color = 'red'
    } else {
        tRes.style.color = 'green'
    }
    tRes.textContent = result
}

function comWithAct(val1, val2, actionSym) {
    const num1 = Number(val1.value)
    const num2 = Number(val2.value)

    if (actionSym == '+') {
        return num1 + num2
    } else {
        return num1 - num2
    }
}

submit.onclick = function () {
const result = comWithAct(input1, input2, action)
printResult(result)

}