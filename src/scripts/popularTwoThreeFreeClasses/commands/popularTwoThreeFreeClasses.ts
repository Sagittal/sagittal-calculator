import { program } from "commander"
import { CommandFlag, LogTarget, parseCommands, saveLog } from "../../../general"
import {
    DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES,
    POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
} from "../constants"
import { computePopularTwoThreeFreeClassesTable } from "../io"
import { computeKnownPopularTwoThreeFreeClasses } from "../knownPopularTwoThreeFreeClasses"
import { computePopularTwoThreeFreeClasses } from "../popularTwoThreeFreeClasses"

// TODO: consider adding a layer which pre-calculates numerators up to 3501 per Dave's suggestion on the forum

program
    .option(`-${CommandFlag.MAX_N2D3P9}, --max-n2d3p9 [maxN2D3P9]`, "max N2D3P9", parseFloat)
    .option(`-${CommandFlag.KNOWN_POPULAR_TWO_THREE_FREE_CLASSES}, --known-popular-2-3-free-classes`, "known popular 2,3-free classes")

parseCommands(POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP)

const maxN2D3P9 = program.maxN2d3p9 || DEFAULT_MAX_N2D3P9_FOR_POPULAR_TWO_THREE_FREE_CLASSES
const knownPopularTwoThreeFreeClasses = program.knownPopularTwoThreeFreeClasses

const popularTwoThreeFreeClasses = knownPopularTwoThreeFreeClasses ?
    computeKnownPopularTwoThreeFreeClasses() :
    computePopularTwoThreeFreeClasses(maxN2D3P9)

saveLog(
    computePopularTwoThreeFreeClassesTable(popularTwoThreeFreeClasses, maxN2D3P9),
    LogTarget.ALL,
    POPULAR_TWO_THREE_FREE_CLASSES_SCRIPT_GROUP,
)
