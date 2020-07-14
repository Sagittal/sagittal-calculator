import { deepEquals } from "./deepEquals"

const arraysHaveSameContents = <T>(arrayOne: T[], arrayTwo: T[]) => {
    if (arrayOne.length !== arrayTwo.length) {
        return false
    }

    return arrayOne.every(elementOne =>
        arrayTwo.some(elementTwo =>
            deepEquals(elementOne, elementTwo)))
}

export {
    arraysHaveSameContents,
}
