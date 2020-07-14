import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../notations"
import { analyzeBound } from "../bound"
import { computeHistories } from "../plot"
import { AnalysisMode, presentBound } from "../present"

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
