import { computeDeepClone } from "./deepClone"
import { sort } from "./sort"
import { Rank } from "./types"

const fractionallyRank = <T>(arrayOfObjects: T[], rankKey: string): Array<T & { fractionalRank: Rank<T> }> => {
    const clonedArrayOfObjects = computeDeepClone(arrayOfObjects)
    sort(clonedArrayOfObjects, { by: rankKey })

    return clonedArrayOfObjects.map((object: T, index: number): T & { fractionalRank: Rank<T> } => {
        if ((object as T & { fractionalRank: Rank<T> }).fractionalRank) {
            return object as T & { fractionalRank: Rank<T> }
        }

        let tiesCount = 0
        clonedArrayOfObjects.slice(index + 1).forEach((objectWithWorseOrTiedRank: T) => {
            if (
                (objectWithWorseOrTiedRank as unknown as {[index: string]: unknown})[ rankKey ] ===
                (object as unknown as {[index: string]: unknown})[ rankKey ]
            ) {
                tiesCount += 1
            }
        })

        if (tiesCount === 0) {
            return { ...object, fractionalRank: index + 1 } as T & { fractionalRank: Rank<T> }
        } else {
            const fractionalRank: Rank = (index + 1) + tiesCount / 2 as Rank<T>

            for (let i = index; i < index + tiesCount; i++) {
                (clonedArrayOfObjects[ i + 1 ] as T & { fractionalRank: Rank<T> }).fractionalRank = fractionalRank as Rank<T>
            }

            return { ...object, fractionalRank } as T & { fractionalRank: Rank<T> }
        }
    })
}

export {
    fractionallyRank,
}
