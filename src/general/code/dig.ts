import { isUndefined } from "./typeGuards"
import { Path } from "./types"

const dig = (object: unknown, path: Path): unknown => {
    let cursor = object

    if (typeof path === "string" || typeof path === "number") {
        return (cursor as {[index: string]: unknown})[ path ]
    }

    for (const key of path) {
        if (!isUndefined((cursor as {[index: string]: unknown})[key])) {
            cursor = (cursor as {[index: string]: unknown})[ key ] as {[index: string]: unknown}
        } else {
            return undefined
        }
    }

    return cursor
}

export {
    dig,
}
