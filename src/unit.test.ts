import { add } from './unit'

it('should add two numbers', () => {
    const inputA = 1
    const inputB = 2
    const expectedResult = 3
    const result = add(inputA, inputB)

    expect(result).toEqual(expectedResult)
})
