import {deepEquals} from "./deepEquals"

const arraysHaveSameContents = (arrayOne, arrayTwo) => {
    if (arrayOne.length !== arrayTwo.length) return false

    return arrayOne.every(elementOne => {
        return arrayTwo.some(elementTwo => {
            return deepEquals(elementOne, elementTwo)
        })
    })
}

export {
    arraysHaveSameContents,
}
