import {dig} from "./dig"
import {finalElement, indexOfFinalElement} from "./finalElement"
import {isArray} from "./typeGuards"
import {KeyPath, Obj} from "./types"

const setAt = (object: Obj, keyPath: KeyPath, value: unknown, options: {parents?: [] | {}} = {}): void => {
    let cursor: Obj
    let finalKey: string | number
    if (isArray(keyPath)) {
        cursor = dig(object, keyPath.slice(0, indexOfFinalElement(keyPath)) as KeyPath, options) as Obj
        finalKey = finalElement(keyPath)
    } else {
        cursor = object
        finalKey = keyPath
    }

    cursor[finalKey] = value
}

export {
    setAt,
}
