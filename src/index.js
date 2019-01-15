const chalk = require('chalk')
const Tonal = require('tonal')
const _ = require('lodash')
const readline = require('readline');
const emoji = require('node-emoji')

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
    const tada = emoji.get('tada')
    const sad = emoji.get('sob')

    if (_.trim(_.toLower(answer)) === _.trim(_.toLower(correctNote))) {
        console.log(chalk.bgGreen.white(` ${tada} CORRECT! \r\n`))
        score++
    } else {
        console.log(chalk.bgRed.white(` ${sad}  WRONG! The correct answer is ${correctNote} \r\n`))
    }

    scale.shift()
    count++

}

const askQuestion = async () => {

    return new Promise((resolve) => {

        const note = emoji.get('musical_note')

        rl.question(chalk.bgYellow.black(` ${note}  What is note ${count+1} of the ${scaleName} major scale? \r\n`), (answer) => {
            checkAnswer(answer)
            resolve()
        })

    })

}

(async () => {
    
    while (scale.length > 0) {

        await askQuestion()

    }

    const medal = emoji.get('medal')
    console.log(chalk.bgBlue.white(` ${medal}  You got ${score}/7 correct `))
    rl.close();
})()