import { Cents, CentsPosition, Maybe, Name, Pitch } from "../../../general"
import { APOTOME_CENTS } from "../../constants"
import { MAX_SINGLE_SHAFT_CENTS } from "../intervals"
import { JI_NOTATION_LEVEL_EDAS } from "./levelEdas"
import { JI_NOTATION_LEVELS } from "./levels"
import { JiNotationLevel } from "./types"

const computeInaMidpoints = (jiNotationLevel: JiNotationLevel): CentsPosition[] => {
    const eda = JI_NOTATION_LEVEL_EDAS[ JI_NOTATION_LEVELS.indexOf(jiNotationLevel) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree: number): Maybe<CentsPosition> => {
        const midpoint = degree + 0.5
        const cents = APOTOME_CENTS * midpoint / eda as Cents

        if (cents > MAX_SINGLE_SHAFT_CENTS) {
            return undefined
        }

        const name: Name<Pitch> = `${midpoint}°${eda}` as Name<Pitch>

        return { name, cents }
    })

    return inaMidpoints.filter((inaMidpoint: Maybe<CentsPosition>): boolean => !!inaMidpoint) as CentsPosition[]
}

export {
    computeInaMidpoints,
}
