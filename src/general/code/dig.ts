import {stringify} from "../io"
import {shallowClone} from "./clone"
import {isNumber, isString, isUndefined} from "./typeGuards"
import {KeyPath, Obj} from "./types"

const dig = (
    object: Obj,
    keyPath: KeyPath,
    {parents = undefined, strict = false}: {parents?: [] | {}, strict?: boolean} = {},
): unknown => {
    let cursor: Obj | unknown = object

    let keyPathArray = isNumber(keyPath) || isString(keyPath) ? [keyPath] : keyPath

    for (const key of keyPathArray) {
        if (!isUndefined((cursor as Obj)[key])) {
            cursor = (cursor as Obj)[key]
        } else if (parents) {
            (cursor as Obj)[key] = shallowClone(parents)
            cursor = (cursor as Obj)[key]
        } else if (strict) {
            throw new Error(`Failed to dig value at ${stringify(keyPath)} of ${stringify(object)}.`)
        } else {
            return undefined
        }
    }

    return cursor
}

export {
    dig,
}
