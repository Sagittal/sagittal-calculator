import { computeDeepClone } from "./deepClone"
import { Rank } from "./types"

// TODO: the other types of Rank throughout the code should be parameterized types of Rank

const fractionallyRank = <T extends { [ index: string ]: unknown }, U>(arrayOfObjects: T[], rankKey: string): Array<T & { fractionalRank: Rank }> => {
    let clonedArrayOfObjects = computeDeepClone(arrayOfObjects)
    clonedArrayOfObjects = clonedArrayOfObjects.sort((element: T, nextElement: T) => {
        // TODO: up your TypeScript game here by using type guards;
        //  I think both strings and numbers should be okay to do subtraction on
        return element[ rankKey ] as number - (nextElement[ rankKey ] as number)
    })

    return clonedArrayOfObjects.map((object: T, index: number): T & { fractionalRank: Rank } => {
        if ((object as T & { fractionalRank: Rank }).fractionalRank) {
            return object as T & { fractionalRank: Rank }
        }

        let tiesCount = 0
        clonedArrayOfObjects.slice(index + 1).forEach((objectWithWorseOrTiedRank: T) => {
            if (objectWithWorseOrTiedRank[ rankKey ] === object[ rankKey ]) {
                tiesCount += 1
            }
        })

        if (tiesCount === 0) {
            return { ...object, fractionalRank: index + 1 } as T & { fractionalRank: Rank }
        } else {
            const fractionalRank: Rank = (index + 1) + tiesCount / 2 as Rank

            for (let i = index; i < index + tiesCount; i++) {
                (clonedArrayOfObjects[ i + 1 ] as T & { fractionalRank: Rank }).fractionalRank = fractionalRank as Rank
            }

            return { ...object, fractionalRank } as T & { fractionalRank: Rank }
        }
    })
}

export {
    fractionallyRank,
}
