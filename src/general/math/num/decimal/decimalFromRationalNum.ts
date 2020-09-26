import { isUndefined } from "../../../code"
import { RationalNum, RationalNumTypeParameters } from "../../rational"
import { computeDecimalFromMonzo } from "./decimalFromMonzo"
import { computeDecimalFromRatio } from "./decimalFromRatio"
import { Decimal } from "./types"

const computeDecimalFromRationalNum = <T extends RationalNumTypeParameters = { potentiallyIrrational: false }>(
    { decimal, ratio, monzo }: RationalNum,
): Decimal<T> => {
    let decimalOutput
    if (isUndefined(decimal)) {
        if (!isUndefined(ratio)) {
            decimalOutput = computeDecimalFromRatio(ratio)
        } else if (!isUndefined(monzo)) {
            decimalOutput = computeDecimalFromMonzo(monzo)
        }
    } else {
        decimalOutput = decimal
    }

    return decimalOutput as Decimal<T>
}

export {
    computeDecimalFromRationalNum,
}
