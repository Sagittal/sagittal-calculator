import { isUndefined } from "../code"
import { Num } from "./types"

// TODO: should all these "is" files be all called typeGuards.ts?
//  I think they should all use the "candidate" lingo

const computeIsNum = <T extends unknown>(candidateNum: T): candidateNum is T & Num => {
        // @ts-ignore
    return !isUndefined(candidateNum.monzo) ||
        // @ts-ignore
        !isUndefined(candidateNum.ratio) ||
        // @ts-ignore
        !isUndefined(candidateNum.decimal)
}

export {
    computeIsNum,
}
