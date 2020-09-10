import { computeTrimmedArray } from "../code"
import { Integer, Max, Prime, PRIMES } from "../math"
import { JiPitch } from "../music"
import { computeMonzoFromIntegerOrJiPitch } from "./monzo"

const computeGpf = (integerOrJiPitch: Integer | JiPitch): Max<Prime> => {
    const monzo = computeMonzoFromIntegerOrJiPitch(integerOrJiPitch)
    const trimmedMonzo = computeTrimmedArray(monzo)

    if (!trimmedMonzo.length) {
        return 1 as Max<Prime>
    }

    return PRIMES[ trimmedMonzo.length - 1 ] as Max<Prime>
}

export {
    computeGpf,
}
