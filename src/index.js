const chalk = require('chalk')
const Tonal = require('tonal')
const _ = require('lodash')
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let score = 0
let count = 0
const notes = _.shuffle(Tonal.Scale.notes('c chromatic'))
const scale = Tonal.Scale.notes(`${notes[0]} major`)

const checkAnswer = answer => {

    answer = _.trim(_.toLower(answer))

    if (answer === _.toLower(scale[0])) {
        console.log(chalk.bgGreen.white('CORRECT!\r\n'))
        score++
    } else {
        console.log(chalk.bgRed.white(`WRONG! The correct answer is ${scale[0]}\r\n`))
    }

    scale.shift()
    count++

}

const askQuestion = async () => {

    return new Promise((resolve) => {

        rl.question(chalk.bgYellow.black(`What is note ${count+1} of the ${notes[0]} major scale?\r\n`), (answer) => {
            checkAnswer(answer)
            resolve()
        })

    })

}

(async () => {
    
    while (scale.length > 0) {

        await askQuestion()

    }

    let message = `You got ${score}/7 correct.`
    console.log(chalk.bgYellow.black(message))
    rl.close();

})()