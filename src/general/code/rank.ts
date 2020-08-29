import { Integer } from "../math"
import { Count } from "../types"
import { computeDeepClone } from "./deepClone"
import { dig } from "./dig"
import { sort } from "./sort"
import { Rank, RankOptions, RankStrategy } from "./types"

const rank = <T>(arrayOfObjects: T[], options: RankOptions = {}): Array<T & { rank: Rank<T> }> => {
    const { by = "value", strategy = RankStrategy.COMPETITION, descending } = options

    const clonedArrayOfObjects = computeDeepClone(arrayOfObjects)
    sort(clonedArrayOfObjects, { by, descending })

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
                    if (dig(objectWithWorseOrTiedRank, by) === dig(object, by)) {
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
            return clonedArrayOfObjects.map((object: T): T & { rank: Rank<T, Integer> } => {
                const rankingValue = dig(object, by)
                if (rankingValue === previousValue) {
                    tiesCount = tiesCount + 1 as Count

                    return { ...object, rank: rank as Rank<T, Integer> }
                } else {
                    rank = rank + 1 + tiesCount as Rank<T, Integer>
                    tiesCount = 0 as Count
                    previousValue = rankingValue

                    return { ...object, rank: rank as Rank<T, Integer> }
                }
            })
        case RankStrategy.DENSE:
            return clonedArrayOfObjects.map((object: T): T & { rank: Rank<T, Integer> } => {
                const rankingValue = dig(object, by)
                if (rankingValue === previousValue) {
                    return { ...object, rank: rank as Rank<T, Integer> }
                } else {
                    rank = rank + 1 as Rank<T>
                    previousValue = rankingValue

                    return { ...object, rank: rank as Rank<T, Integer> }
                }
            })
        case RankStrategy.ORDINAL:
            return clonedArrayOfObjects.map((object: T, index: number): T & { rank: Rank<T, Integer> } => {
                return { ...object, rank: index + 1 as Rank<T, Integer> }
            })
        default:
            throw new Error(`unknown rank strategy ${strategy}`)
    }
}

export {
    rank,
}
