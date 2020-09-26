import { computeTrimmedArray, isUndefined } from "../../../code"
import { formatNum } from "../../../io"
import { RationalNum, RationalNumTypeParameters } from "../../rational"
import { computeMonzoFromRatio } from "./monzoFromRatio"
import { computeMonzoFromRationalDecimal } from "./monzoFromRationalDecimal"
import { Monzo } from "./types"

const computeMonzoFromRationalNum = <T extends RationalNumTypeParameters>(
    rationalNum: RationalNum<T>,
): Monzo<T> => {
    const { monzo, ratio, decimal } = rationalNum
    let outputMonzo: Monzo<T>
    if (!isUndefined(monzo)) {
        outputMonzo = monzo
    } else if (!isUndefined(ratio)) {
        outputMonzo = computeMonzoFromRatio(ratio)
    } else if (!isUndefined(decimal)) {
        outputMonzo = computeMonzoFromRationalDecimal(decimal)
    } else {
        throw new Error(`Tried to compute monzo from rational num ${formatNum(rationalNum, { align: false })} but it had no numeric members.`)
    }

    return computeTrimmedArray(outputMonzo)
}

export {
    computeMonzoFromRationalNum,
}
