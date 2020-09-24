import { NumTypeParameters } from "../../types"
import { isInteger } from "../isInteger"
import { Ratio, RatioNotDefaultingToRational } from "./types"

// TODO: IRRATIONAL RATIOS
//  this method is kind of a lie. any ratio is rational by our current implementation,
//  which limits numerators and denominators to primitive numbers, not sqrts and such.
//  e.g. this would say false for 5.5/3.5, even though that's just 11/7.
//  so maybe we mean something slightly different by it. what we mean by it is that both numerator
//  and denominator are integers... such that we can do things like get it into lowest terms.
//  but perhaps a sibling of lowest terms could be converting 5.5/3.5 into 11/7.
//  we have the ability to do that already from computeRatioFromRationalDecimal. just call it on both parts.
//  so it would first go to 55/10 // 35/10, then cancel the powers of 10 to get 55/35, then just take lowest terms.
//  it would be kind of nice if ratios were FORCED to be two integers. otherwise why use them...
//  and that would also allow us to clean up that comment in some test somewhere about parsing ratios
//  where it conflicted with parsing factorized comma names e.g. 5².11
const computeRatioIsRational = <T extends NumTypeParameters>(
    ratio: RatioNotDefaultingToRational<T>,
): ratio is Ratio<T & { potentiallyIrrational: false }> => {
    const [numerator, denominator] = ratio

    return isInteger(numerator) && isInteger(denominator)
}

export {
    computeRatioIsRational,
}
