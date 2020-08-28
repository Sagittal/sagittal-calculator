import { Monzo } from "../math"
import { Formatted } from "./types"

const parseMonzo = (monzoText: Formatted<Monzo>): Monzo => {
    const preparsedMonzoText = monzoText
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace("[ ", "[")
        .replace(" ]", "]")
        .replace(/\s/g, ",")

    return JSON.parse(preparsedMonzoText)
}

export {
    parseMonzo,
}
