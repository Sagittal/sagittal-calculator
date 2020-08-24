import { computeDeepClone } from "./deepClone"
import { sort } from "./sort"
import { Rank } from "./types"

const fractionallyRank = <T>(arrayOfObjects: T[], rankKey: string): Array<T & { rank: Rank<T> }> => {
    const clonedArrayOfObjects = computeDeepClone(arrayOfObjects)
    sort(clonedArrayOfObjects, { by: rankKey })

    return clonedArrayOfObjects.map((object: T, index: number): T & { rank: Rank<T> } => {
        if ((object as T & { rank: Rank<T> }).rank) {
            return object as T & { rank: Rank<T> }
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
            return { ...object, rank: index + 1 } as T & { rank: Rank<T> }
        } else {
            const rank: Rank = (index + 1) + tiesCount / 2 as Rank<T>

            for (let i = index; i < index + tiesCount; i++) {
                (clonedArrayOfObjects[ i + 1 ] as T & { rank: Rank<T> }).rank = rank as Rank<T>
            }

            return { ...object, rank } as T & { rank: Rank<T> }
        }
    })
}

export {
    fractionallyRank,
}
