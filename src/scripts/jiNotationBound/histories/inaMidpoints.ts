import { Cents, computeCentsFromPitch, computeNumberFromCents, Maybe, Name, numIsHigher } from "../../../general"
import {
    APOTOME,
    JiNotationLevel,
    JI_NOTATION_LEVELS,
    JI_NOTATION_LEVEL_EDAS,
    MAX_SYMBOL_CLASS_POSITION,
} from "../../../sagittal"
import { InaMidpoint } from "./types"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevel): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[ JI_NOTATION_LEVELS.indexOf(jiNotationLevel) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        // TODO: perhaps this would be a nice place to start improving... er, well, actually this is just
        //  another place where we could use that helper for a fraction of a rational pitch!
        //  or actually, rather, ina midpoints should be encoded with the new ED property of Nums
        const cents = computeCentsFromPitch(APOTOME) * midpoint / eda as Cents
        const number = computeNumberFromCents(cents)

        if (numIsHigher({ decimal: number }, MAX_SYMBOL_CLASS_POSITION)) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return { name, decimal: number }
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<InaMidpoint>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
