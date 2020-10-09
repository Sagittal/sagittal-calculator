import { abs, Abs, Decimal, Exponent, Prime, Scamon, THREE_PRIME_INDEX } from "../../../general"

const computeAte = (
    jiPitch: Scamon<{ rational: true }>,
): Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>> =>
    abs(jiPitch.monzo[ THREE_PRIME_INDEX ] || 0) as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>

export {
    computeAte,
}
