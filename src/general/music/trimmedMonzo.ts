import { Monzo } from "./types"

const computeTrimmedMonzo = <MonzoType extends Monzo>(monzo: MonzoType): MonzoType => {
    const trimmedMonzo = monzo.slice()

    while (trimmedMonzo[ trimmedMonzo.length - 1 ] === 0) {
        trimmedMonzo.pop()
    }

    return trimmedMonzo as MonzoType
}

export {
    computeTrimmedMonzo,
}
