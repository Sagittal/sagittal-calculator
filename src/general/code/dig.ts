import { isNumber, isString, isUndefined } from "./typeGuards"
import { KeyPath, Obj } from "./types"

const dig = (object: Obj, keyPath: KeyPath, { parents = false }: { parents?: boolean } = {}): unknown => {
    let cursor: Obj | unknown = object

    if (isNumber(keyPath) || isString(keyPath)) {
        return (cursor as Obj)[ keyPath ]
    }

    for (const key of keyPath) {
        if (!isUndefined((cursor as Obj)[ key ])) {
            cursor = (cursor as Obj)[ key ]
        } else if (parents) {
            (cursor as Obj)[ key ] = {}
            cursor = (cursor as Obj)[ key ]
        } else {
            return undefined
        }
    }

    return cursor
}

export {
    dig,
}
