import "colors"
import {program} from "commander"
import {BOUNDS} from "../../../notations/ji/bounds"
import {computeHistories} from "../plot/histories"
import {analyzeBound} from "../bound"
import {presentBoundAnalysis} from "../present/boundAnalysis"

program
  .option("-b, --boundId <boundId>", "specific bound", parseInt) // todo: don't even accept it as a flag... just arg it
  .parse(process.argv)

const boundId = program.details || program.args[0]

const bound = boundId && BOUNDS.find(bound => bound.id === parseInt(boundId))

if (bound) {
  const histories = computeHistories(bound)
  const boundAnalysis = analyzeBound(histories, bound)

  console.log(presentBoundAnalysis(boundAnalysis, {bound, mode: "DETAILS"}))
} else {
  throw new Error(`Could not find bound with ID ${boundId}`)
}
