import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../notations/ji/bounds"
import { computeHistories } from "../plot/histories"
import { analyzeBound } from "../bound"
import { presentBound } from "../present/bound"
import { AnalysisMode } from "../present/types"

program.parse(process.argv)

const boundId = program.args[ 0 ]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    console.log(presentBound(analyzedBound, { bound, mode: AnalysisMode.DETAILS }))
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
