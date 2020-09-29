import { round } from "../math"
import { isArray, isNumber, isObject } from "./typeGuards"
import { Precision } from "./types"

const deepRound = <T>(value: T, precision?: Precision): T => {
    if (isNumber(value)) {
        return round(value, precision)
    } else if (isArray(value)) {
        return (value as T[]).map((element: T): T => deepRound(element, precision) as unknown as T) as unknown as T
    } else if (isObject(value)) {
        // TODO: how many times do I do this? should we have a map values helper?
        //  Because yeah, maybe what I *actually* wanted was a deepFormat, to call format on everything deeply
        //  Or maybe just convert this to a thing that will call some fn on everything deeply, you already have it here!
        //  That would also assuage my concerns about this pulling from math module into code, which is the wrong drctn
        return (Object.entries(value) as Array<[string, T]>).reduce(
            (roundedObject: T, [key, value]: [string, T]): T => {
                return {
                    ...roundedObject,
                    [ key ]: deepRound(value, precision),
                }
            },
            {} as T,
        ) as unknown as T
    } else {
        return value
    }
}

export {
    deepRound,
}
