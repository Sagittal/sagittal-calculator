import { Bound, Level } from "../../../notations/ji/types"

const computeBoundNextLevel = (bound: Bound, level: Level) => {
    const { levels } = bound

    return levels[ levels.indexOf(level) + 1 ]
}

export {
    computeBoundNextLevel,
}
