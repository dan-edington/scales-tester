const readline = require('readline')
const chalk = require('chalk')
const emoji = require('node-emoji')
const Scales = require('./Scales')
const checkAnswer = require('./checkAnswer')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const scale = Scales.getRandomMajorScale()
const notes = Scales.getScaleNotes(scale)
const emojis = {
    note: emoji.get('musical_note'),
    medal: emoji.get('medal'),
    sob: emoji.get('sob'),
    tada: emoji.get('tada')
}
let score = 0
let currentQuestion = 0

const askQuestion = async () => {
    return new Promise(resolve => {
        rl.question(
            chalk.bgYellow.black(
                ` ${emojis.note}  What is note ${currentQuestion + 1} of the ${scale} scale? \r\n`
            ),
            answer => {
                if (checkAnswer({ scale, currentQuestion, answer })) {
                    console.log(chalk.bgGreen.white(` ${emojis.tada} CORRECT! \r\n`))
                    score++
                } else {
                    console.log(
                        chalk.bgRed.white(
                            ` ${emojis.sob}  WRONG! The correct answer is ${notes[currentQuestion]} \r\n`
                        )
                    )
                }
                currentQuestion++
                resolve()
            }
        )
    })
}

(async () => {

    while (currentQuestion < notes.length) {
        await askQuestion()
    }

    console.log(chalk.bgBlue.white(` ${emojis.medal}  You got ${score}/7 correct `))
    rl.close()

})()