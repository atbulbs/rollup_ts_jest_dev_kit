import SingletonClass from '../lib/singleton_class.es.js'

test('is singleton', () => {
  const instance = new SingletonClass()
  const _instance = new SingletonClass()
  expect(instance === _instance).toBe(true)
})
