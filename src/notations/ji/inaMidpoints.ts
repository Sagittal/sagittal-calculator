import { APOTOME_CENTS, Cents, CentsPosition, Maybe, Name, Pitch } from "../../general"
import { MAX_SINGLE_SHAFT_CENTS } from "../intervals"
import { LEVEL_EDAS } from "./levelEdas"
import { LEVELS } from "./levels"
import { Level } from "./types"

const computeInaMidpoints = (level: Level): CentsPosition[] => {
    const eda = LEVEL_EDAS[ LEVELS.indexOf(level) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree): Maybe<CentsPosition> => {
        const midpoint = degree + 0.5
        const cents = APOTOME_CENTS * midpoint / eda as Cents

        if (cents > MAX_SINGLE_SHAFT_CENTS) {
            return undefined
        }

        const name: Name<Pitch> = `${midpoint}°${eda}` as Name<Pitch>

        return { name, cents }
    })

    return inaMidpoints.filter(inaMidpoint => !!inaMidpoint) as CentsPosition[]
}

export {
    computeInaMidpoints,
}
