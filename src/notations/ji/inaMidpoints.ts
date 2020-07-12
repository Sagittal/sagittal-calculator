import { APOTOME } from "../intervals"
import { MAXIMUM_POSITION } from "./intervals"
import { LEVELS } from "./levels"
import { LEVEL_EDAS } from "./levelEdas"
import { Level } from "./types"
import { EventName, SnappablePosition } from "../../scripts/analyzeBounds/types"
import { Cents } from "../../utilities/types"

const computeInaMidpoints = (level: Level): SnappablePosition[] => {
    const eda = LEVEL_EDAS[ LEVELS.indexOf(level) ]

    let inaMidpoints = [...Array(eda).keys()].map((degree): SnappablePosition | undefined => {
        const midpoint = degree + 0.5
        const position = APOTOME * midpoint / eda as Cents

        if (position > MAXIMUM_POSITION) return undefined

        const name: EventName = `${midpoint}°${eda}` as EventName

        return { name, position }
    })

    return inaMidpoints.filter(inaMidpoint => !!inaMidpoint) as SnappablePosition[]
}

export {
    computeInaMidpoints,
}
