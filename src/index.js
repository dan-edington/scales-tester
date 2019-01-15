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
const scaleName = _.shuffle(Tonal.Scale.notes('c chromatic'))[0]
const scale = Tonal.Scale.notes(`${scaleName} major`)

const checkAnswer = answer => {

    const correctNote = scale[0]

    if (_.trim(_.toLower(answer)) === _trim(_.toLower(correctNote))) {
        console.log(chalk.bgGreen.white('CORRECT!\r\n'))
        score++
    } else {
        console.log(chalk.bgRed.white(`WRONG! The correct answer is ${correctNote}\r\n`))
    }

    scale.shift()
    count++

}

const askQuestion = async () => {

    return new Promise((resolve) => {

        rl.question(chalk.bgYellow.black(`What is note ${count+1} of the ${scaleName} major scale?\r\n`), (answer) => {
            checkAnswer(answer)
            resolve()
        })

    })

}

(async () => {
    
    while (scale.length > 0) {

        await askQuestion()

    }

    console.log(chalk.bgYellow.black(`You got ${score}/7 correct.`))
    rl.close();

})()