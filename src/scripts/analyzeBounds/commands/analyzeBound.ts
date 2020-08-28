import "colors"
import { program } from "commander"
import { BOUNDS } from "../../../sagittal"
import { analyzeBound } from "../bound"
import { computeFormattedBound } from "../io"
import { computeHistories } from "../plot"

program.parse(process.argv)

const boundId = program.args[ 0 ]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
    const histories = computeHistories(bound)
    const analyzedBound = analyzeBound(histories, bound)

    console.log(computeFormattedBound(analyzedBound, { bound }))
} else {
    throw new Error(`Could not find bound with ID ${boundId}`)
}
