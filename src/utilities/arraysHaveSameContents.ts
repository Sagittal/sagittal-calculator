import { deepEquals } from "./deepEquals"

const arraysHaveSameContents = <T>(arrayOne: T[], arrayTwo: T[]) => {
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
