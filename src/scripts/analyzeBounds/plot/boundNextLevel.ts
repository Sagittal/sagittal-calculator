import { Bound, Level } from "../../../notations"

const computeBoundNextLevel = (bound: Bound, level: Level) => {
    const { levels } = bound

    return levels[ levels.indexOf(level) + 1 ]
}

export {
    computeBoundNextLevel,
}
