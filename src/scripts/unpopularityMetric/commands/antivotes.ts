import "colors"
import { program } from "commander"
import { computeAntivotes } from "../sumOfSquares/antivotes/antivotes"
import { presentRatio } from "../../../utilities/comma/present/ratio"
import { Parameter, Submetric, SubmetricType } from "../types"
import { Combination, Ratio } from "../../../utilities/types"
import { DynamicParameterValue } from "../automator/samples/types"

program
    .option("-d, --debug", "debug")
    .parse(process.argv)

const debug = !!program.debug

const submetrics =
    [
        {
            [ Parameter.K ]: 0 as DynamicParameterValue,
            [ Parameter.A ]: 1.994 as DynamicParameterValue,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.455 as DynamicParameterValue,
            [ Parameter.W ]: -2.08 as DynamicParameterValue,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.577 as DynamicParameterValue,
        },
    ] as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics, { debug })

console.log(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`)
