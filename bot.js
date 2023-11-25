setInterval(function () {
    var hack = Object.values(document.querySelector('#app > div > div'))[1].children[0]['_owner'].stateNode.state.question
    try {
        hack.correctAnswers = hack.answers
    } catch (err) {}
}) // The code above is from rxzyx

function clickbutton() {
    document.querySelector('.styles__answerText___2eIBw-camelCase').click();
}

function next() {
    document.querySelector('.styles__nextText___2QnHA-camelCase').click();
}

const clickthemultiplier = () => {
    const element = document.querySelector('.styles__choice___MzaKW-camelCase.styles__choiceLeft___2dhL8-camelCase');
    if (element) {
        element.click();
    }
}



(function botLoop(i) {
    setTimeout(function () {
        clickbutton()
    }, 3000)
    setTimeout(function () {
        next()
    }, 4000)
    setTimeout(function () {
        clickthemultiplier()
    }, 5000)
    setTimeout(function () {
        botLoop()
    }, 6000)
})(10);
