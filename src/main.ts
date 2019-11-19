function singleton (rawConstructor: Function) {
  let instance

  const newConstructor: any = function (...args) {
    const assistConstructor: any = function assistConstructor () {
        return rawConstructor.apply(this, args)
    }
    assistConstructor.prototype = rawConstructor.prototype
    if (instance === undefined) {
      instance = new assistConstructor()
    }
    return instance
  }

  newConstructor.prototype = rawConstructor.prototype

  return newConstructor

}

@singleton
export default class SingletonClass { }
