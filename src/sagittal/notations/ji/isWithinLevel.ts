import { LEVELS } from "./levels"
import { Level } from "./types"

const isWithinLevel = (level: Level, targetLevel: Level): boolean =>
    LEVELS.indexOf(level) <= LEVELS.indexOf(targetLevel)

export {
    isWithinLevel,
}
