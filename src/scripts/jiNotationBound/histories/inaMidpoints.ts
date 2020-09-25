import { Cents, computeCentsFromPitch, computeDecimalFromCents, Maybe, Name, pitchIsHigher } from "../../../general"
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
        const cents = computeCentsFromPitch(APOTOME) * midpoint / eda as Cents
        const decimal = computeDecimalFromCents(cents)

        if (pitchIsHigher({ decimal }, MAX_SYMBOL_CLASS_POSITION)) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return { name, decimal }
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<InaMidpoint>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
