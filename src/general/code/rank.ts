import { Integer } from "../math"
import { Count } from "../types"
import { deepClone } from "./clone"
import { dig } from "./dig"
import { isCloseTo } from "./isCloseTo"
import { sort } from "./sort"
import { isNumber, isUndefined } from "./typeGuards"
import { Maybe, Rank, RankOptions, RankStrategy } from "./types"

const isCloseOrEqual = (a: unknown, b: unknown, precision: Maybe<Integer>): boolean => {
    if (isUndefined(precision) || !isNumber(a) || !isNumber(b)) {
        return a === b
    } else {
        return isCloseTo(a, b, precision)
    }
}

const rank = <T>(arrayOfObjects: T[], options: RankOptions = {}): Array<T & { rank: Rank<T> }> => {
    const { by = "value", strategy = RankStrategy.COMPETITION, descending, precision } = options

    const clonedArrayOfObjects = deepClone(arrayOfObjects)
    sort(clonedArrayOfObjects, { by, descending, precision })

    let rank = 0 as Rank<T>
    let tiesCount = 0 as Count
    let previousValue: unknown

    switch (strategy) {
        case RankStrategy.FRACTIONAL:
            return clonedArrayOfObjects.map((object: T, index: number): T & { rank: Rank<T> } => {
                if ((object as T & { rank: Rank<T> }).rank) {
                    return object as T & { rank: Rank<T> }
                }

                tiesCount = 0 as Count
                clonedArrayOfObjects.slice(index + 1).forEach((objectWithWorseOrTiedRank: T) => {
                    if (isCloseOrEqual(dig(objectWithWorseOrTiedRank, by), dig(object, by), precision)) {
                        tiesCount = tiesCount + 1 as Count
                    }
                })

                if (tiesCount === 0) {
                    return { ...object, rank: index + 1 } as T & { rank: Rank<T> }
                } else {
                    const rank: Rank<T> = (index + 1) + tiesCount / 2 as Rank<T>

                    for (let i = index; i < index + tiesCount; i++) {
                        (clonedArrayOfObjects[ i + 1 ] as T & { rank: Rank<T> }).rank = rank as Rank<T>
                    }

                    return { ...object, rank } as T & { rank: Rank<T> }
                }
            })
        case RankStrategy.COMPETITION:
            return clonedArrayOfObjects.map((object: T): T & { rank: Integer & Rank<T> } => {
                const rankingValue = dig(object, by)
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    tiesCount = tiesCount + 1 as Count

                    return { ...object, rank: rank as Integer & Rank<T> }
                } else {
                    rank = rank + 1 + tiesCount as Integer & Rank<T>
                    tiesCount = 0 as Count
                    previousValue = rankingValue

                    return { ...object, rank: rank as Integer & Rank<T> }
                }
            })
        case RankStrategy.DENSE:
            return clonedArrayOfObjects.map((object: T): T & { rank: Integer & Rank<T> } => {
                const rankingValue = dig(object, by)
                if (isCloseOrEqual(rankingValue, previousValue, precision)) {
                    return { ...object, rank: rank as Integer & Rank<T> }
                } else {
                    rank = rank + 1 as Rank<T>
                    previousValue = rankingValue

                    return { ...object, rank: rank as Integer & Rank<T> }
                }
            })
        case RankStrategy.ORDINAL:
            return clonedArrayOfObjects.map((object: T, index: number): T & { rank: Integer & Rank<T> } => {
                return { ...object, rank: index + 1 as Integer & Rank<T> }
            })
        default:
            throw new Error(`unknown rank strategy ${strategy}`)
    }
}

export {
    rank,
}
