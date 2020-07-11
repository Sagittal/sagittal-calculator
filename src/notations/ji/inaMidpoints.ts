import { APOTOME } from "../intervals"
import { MAXIMUM_POSITION } from "./intervals"
import { LEVELS } from "./levels"
import { LEVEL_EDAS } from "./levelEdas"
import { Level } from "./types"
import { SnappablePosition } from "../../scripts/analyzeBounds/types"

const computeInaMidpoints = (level: Level): SnappablePosition[] => {
    const eda = LEVEL_EDAS[ LEVELS.indexOf(level) ]

    return [...Array(eda).keys()].map(degree => {
        const midpoint = degree + 0.5
        const position = APOTOME * midpoint / eda

        if (position > MAXIMUM_POSITION) return undefined

        const name = `${midpoint}°${eda}`

        return { name, position }
    }).filter(inaMidpoint => !!inaMidpoint) as SnappablePosition[]
}

export {
    computeInaMidpoints,
}
