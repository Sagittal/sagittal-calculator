import { abs, Abs, computeMonzoFromJiPitch, Exponent, Integer, JiPitch, Prime, THREE_PRIME_INDEX } from "../../../general"

const computeAte = (jiPitch: JiPitch): Abs<Integer & Exponent<3 & Prime>> => {
    const monzo = computeMonzoFromJiPitch(jiPitch)

    return abs(monzo[ THREE_PRIME_INDEX ] || 0) as Abs<Integer & Exponent<3 & Prime>>
}

export {
    computeAte,
}
