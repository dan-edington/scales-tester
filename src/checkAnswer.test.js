const checkAnswer = require('./checkAnswer')

test('Returns true or false depending on answer', () => {
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: 'A'})).toBeTruthy()
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: 'a'})).toBeTruthy()
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: 'B'})).toBeFalsy()
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: 'b'})).toBeFalsy()
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: ' A '})).toBeTruthy()
    expect(checkAnswer({ scale: 'A major', currentQuestion: 0, answer: ' a '})).toBeTruthy()
})