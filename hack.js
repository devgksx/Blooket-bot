setInterval(function () {
    var hack = Object.values(document.querySelector('#app > div > div'))[1].children[0]['_owner'].stateNode.state.question
    try {
        hack.correctAnswers = hack.answers
    } catch (err) {}
})

function extracttext() {
    const outerElement1 = document.querySelector('.styles__choice___MzaKW-camelCase styles__choiceLeft___2dhL8-camelCase');
    const innerDiv1 = outerElement1.querySelector('.styles__choiceText___1vlew-camelCase');
    const outerElement2 = document.querySelector('.styles__choice___MzaKW-camelCase styles__choiceRight___3Kgrj-camelCase');
    const innerDiv2 = outerElement2.querySelector('.styles__choiceText___1vlew-camelCase');
    const text1 = innerDiv1.innerText;
    const text2 = innerDiv2.innerText;
    return {
        'Left-button': text1,
        'Right-button': text2
    }
}

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function clickbutton() {
    document.querySelector('.styles__answerText___2eIBw-camelCase').click();
}

function next() {
    document.querySelector('.styles__nextText___2QnHA-camelCase').click();
}

const clickthemultiplier = () => {
    const objects = [{
            id: "Baby Penguin",
            value: 1
        },
        {
            id: "Seal",
            value: 2
        },
        {
            id: "Polar Bear",
            value: 3
        },
        {
            id: "Unicorn",
            value: 4
        },
        {
            id: "King",
            value: 5
        },
        {
            id: "Snowy Owl",
            value: 6
        },
        {
            id: "Arctic Hare",
            value: 7
        },
        {
            id: "Arctic Fox",
            value: 8
        },
        {
            id: "Walrus",
            value: 9
        },
        {
            id: "Dragon",
            value: 10
        },
        {
            id: "Wizard",
            value: 11
        },
        {
            id: "Penguin",
            value: 12
        },
        {
            id: "Holiday Wreath",
            value: 13
        },
        {
            id: "Hot chocolate",
            value: 14
        },
        {
            id: "Gingerbread House",
            value: 15
        },
        {
            id: "Gingerbread Man",
            value: 16
        },
        {
            id: "Santa Claus",
            value: 17
        }
    ];

    const maxObject = objects.reduce((prev, current) => (prev.value > current.value ? prev : current));

    console.log(maxObject); // Output: { id: 2, value: 9 }
    const element = document.querySelector('.styles__choice___MzaKW-camelCase.styles__choiceLeft___2dhL8-camelCase');
    if (element) {
        element.click();
    }
}



(function myLoop(i) {
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
        myLoop()
    }, 6000)
})(10);