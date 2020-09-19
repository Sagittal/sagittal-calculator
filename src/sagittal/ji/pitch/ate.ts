import { abs, Abs, computeJiPitchMonzo, Exponent, Integer, JiPitch, Prime, THREE_PRIME_INDEX } from "../../../general"

const computeAte = (jiPitch: JiPitch): Abs<3 & Integer & Exponent<Prime>> => {
    const monzo = computeJiPitchMonzo(jiPitch)

    return abs(monzo[ THREE_PRIME_INDEX ]) as Abs<3 & Integer & Exponent<Prime>>
}

export {
    computeAte,
}
