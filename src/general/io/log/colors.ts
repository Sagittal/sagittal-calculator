import { ColorMethod } from "../types"
import { LogTarget } from "./types"

const targetColors: Record<LogTarget, ColorMethod> = {
    [ LogTarget.ALL ]: "green",
    [ LogTarget.ANTIVOTES ]: "white",
    [ LogTarget.JI_NOTATION_BOUND ]: "white",
    [ LogTarget.JI_NOTATION_BOUNDS_IMAGE ]: "white",
    [ LogTarget.JI_NOTATION_BOUNDS_TABLE ]: "white",
    [ LogTarget.ANTIVOTES ]: "white",
    [ LogTarget.UNPOPULARITIES ]: "white",
    [ LogTarget.SEARCH ]: "yellow",
    [ LogTarget.POPULATE ]: "cyan",
    [ LogTarget.NEW_BEST_METRIC ]: "green",
    [ LogTarget.SUM_OF_SQUARES ]: "white",
    [ LogTarget.ERRORS ]: "red",
    [ LogTarget.NONE ]: "white",
    [ LogTarget.FINAL_SOLVER_RESULTS ]: "green",
    [ LogTarget.PERFECT ]: "magenta",
    [ LogTarget.FINAL_PERFECTER_RESULTS ]: "green",
    [ LogTarget.PROGRESS ]: "yellow",
}

export {
    targetColors,
}
