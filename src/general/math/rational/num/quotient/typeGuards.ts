import { dividesEvenly } from "../../../dividesEvenly"
import { NumTypeParameters, Quotient } from "../../../num"
import { isInteger } from "../../typeGuards"
import { IntegerQuotient, RationalQuotient } from "./types"

// TODO: IRRATIONAL QUOTIENTS
//  This method is kind of a lie. any quotient is rational by our current implementation,
//  Which limits numerators and denominators to primitive numbers, not sqrts and such.
//  E.g. this would say false for 5.5/3.5, even though that's just 11/7.
//  So maybe we mean something slightly different by it. what we mean by it is that both numerator
//  And denominator are integers... such that we can do things like get it into lowest terms.
//  But perhaps a sibling of lowest terms could be converting 5.5/3.5 into 11/7.
//  We have the ability to do that already from computeRationalQuotientFromRationalDecimal. just call it on both parts.
//  So it would first go to 55/10 // 35/10, then cancel the powers of 10 to get 55/35, then just take lowest terms.
//  It would be kind of nice if quotients were FORCED to be two integers. otherwise why use them...
//  And that would also allow us to clean up that comment in some test somewhere about parsing quotients
//  Where it conflicted with parsing factorized comma names e.g. 5².11

const isRationalQuotient = <T extends NumTypeParameters>(
    candidateRationalQuotient: Quotient<T>,
): candidateRationalQuotient is RationalQuotient<T> => {
    const [numerator, denominator] = candidateRationalQuotient

    return isInteger(numerator) && isInteger(denominator)
}

const isIntegerQuotient = <T extends NumTypeParameters>(
    candidateIntegerQuotient: Quotient<T>,
): candidateIntegerQuotient is IntegerQuotient<T> => {
    const [numerator, denominator] = candidateIntegerQuotient

    return dividesEvenly(numerator, denominator)
}

export {
    isRationalQuotient,
    isIntegerQuotient,
}
