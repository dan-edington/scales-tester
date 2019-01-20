const Scales = require('./Scales')
const possibleScales = ['A','B','C','D','E','F','G','Ab','Bb','Db','Eb','F#'].map(note => `${note} major`)

test('Returns a random major scale name as a string', () => {
    expect(possibleScales).toContain(Scales.getRandomMajorScale())
})