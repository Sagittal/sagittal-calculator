import { Cents, CentsPosition, Maybe, Name, Pitch } from "../../../general"
import {
    APOTOME_CENTS,
    JiNotationLevel,
    JI_NOTATION_LEVELS,
    JI_NOTATION_LEVEL_EDAS,
    MAX_SYMBOL_CLASS_CENTS,
} from "../../../sagittal"
import { InaMidpoint } from "./types"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevel): InaMidpoint[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[ JI_NOTATION_LEVELS.indexOf(jiNotationLevel) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<InaMidpoint> => {
        const midpoint = degree + 0.5
        const cents = APOTOME_CENTS * midpoint / eda as Cents

        if (cents > MAX_SYMBOL_CLASS_CENTS) {
            return undefined
        }

        const name: Name<InaMidpoint> = `${midpoint}°${eda}` as Name<InaMidpoint>

        return { name, cents }
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<CentsPosition>): boolean => !!inaMidpoint) as InaMidpoint[]
}

export {
    computeInaMidpoints,
}
