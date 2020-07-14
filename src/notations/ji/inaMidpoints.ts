import { APOTOME, Cents, Name, Position } from "../../general"
import { MAXIMUM_POSITION } from "./intervals"
import { LEVEL_EDAS } from "./levelEdas"
import { LEVELS } from "./levels"
import { Level } from "./types"

const computeInaMidpoints = (level: Level): Position[] => {
    const eda = LEVEL_EDAS[ LEVELS.indexOf(level) ]

    const inaMidpoints = [...Array(eda).keys()].map((degree): Position | undefined => {
        const midpoint = degree + 0.5
        const cents = APOTOME * midpoint / eda as Cents

        if (cents > MAXIMUM_POSITION) { return undefined }

        const name: Name<Position> = `${midpoint}°${eda}` as Name<Position>

        return { name, cents }
    })

    return inaMidpoints.filter(inaMidpoint => !!inaMidpoint) as Position[]
}

export {
    computeInaMidpoints,
}
