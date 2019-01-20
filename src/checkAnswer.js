const Tonal = require('tonal')
const _ = require('lodash')

const checkAnswer = answerObject => {
    const correctAnswer = Tonal.Scale.notes(answerObject.scale)[answerObject.currentQuestion]
    if (_.trim(_.toLower(answerObject.answer)) === _.toLower(correctAnswer)) {
        return true
    } else {
        return false
    }
}

module.exports = checkAnswer