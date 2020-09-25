import { isUndefined } from "../code"
import { Num } from "./types"

// TODO: should all these "is" files be all called typeGuards.ts?
//  I think they should all use the "candidate" lingo

// TODO: dunno why I have to force it to be Num even though I just type-gaurded that it is;
//  but it probably has something to do with the fact that you couldn't manage to get the input type for
//  computeIsNum such that Num could extend it without T & Num
//  and when you pursue that, also try to get rid of the ts-ignores there
//  though be warned, do not worry about trying to make these be <T extends NumTypeParameters> and Pitch<T>
//  becuase if you do, you'll have massive type errors across the project because you'd be essentially requiring
//  the compared pitches to be the same kind of pitch, which is not necessary at all
//  although I don't actually think this guy is getting used anywhere anymore so maybe clean it up

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
