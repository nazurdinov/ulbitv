import { classNames } from './classNames'

describe('classNames', () => {
  test('test with one classname', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('test positive conditional classname', () => {
    expect(classNames('someClass', { conditionalClass: true })).toBe('someClass conditionalClass')
  })

  test('test negaive conditional classname', () => {
    expect(classNames('someClass', { conditionalClass: false })).toBe('someClass')
  })

  test('test all cases together', () => {
    expect(classNames('someClass', { conditionalClass1: true, conditionalClass2: false }, ['additional-1', 'additional-2'])).toBe('someClass conditionalClass1 additional-1 additional-2')
  })
})
