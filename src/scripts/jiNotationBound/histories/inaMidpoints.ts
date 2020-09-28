import {
    Cents,
    computeCentsFromPitch,
    computeNumberFromCents,
    computeNumFromDecimal,
    Maybe,
    Name,
    numIsHigher,
} from "../../../general"
import {
    APOTOME,
    InaMidpoint,
    JiNotationLevel,
    JI_NOTATION_LEVELS,
    JI_NOTATION_LEVEL_EDAS,
    MAX_SYMBOL_CLASS_POSITION,
} from "../../../sagittal"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevel): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[ JI_NOTATION_LEVELS.indexOf(jiNotationLevel) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        // TODO: IMPLEMENT EDO PITCHES ON POTENTIALLY IRRATIONAL NUMS
        //  Perhaps this would be a nice place to start improving... er, well, actually this is just
        //  Another place where we could use that helper for a fraction of a rational pitch!
        //  Or actually, rather, ina midpoints should be encoded with the new ED property of Nums
        //  And when you do that, keep the decimals, but only in the form of a confirmational test
        const cents = computeCentsFromPitch(APOTOME) * midpoint / eda as Cents
        const number = computeNumberFromCents(cents)

        if (numIsHigher(computeNumFromDecimal(number), MAX_SYMBOL_CLASS_POSITION)) {
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
