const Tonal = require('tonal')
const _ = require('lodash')
const allNotes = Tonal.Scale.notes('c chromatic')

const getRandomMajorScale = () => {
    const noteName = _.sample(allNotes)
    return `${noteName} major`
}

const getScaleNotes = scale => {
    return Tonal.Scale.notes(scale)
}

module.exports = {
    getRandomMajorScale,
    getScaleNotes
}