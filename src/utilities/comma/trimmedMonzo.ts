import { Monzo } from "./types"

const computeTrimmedMonzo = (monzo: Monzo) => {
    const trimmedMonzo = monzo.slice()

    while (trimmedMonzo[ trimmedMonzo.length - 1 ] === 0) {
        trimmedMonzo.pop()
    }

    return trimmedMonzo
}

export {
    computeTrimmedMonzo,
}
