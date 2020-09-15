import { Monzo } from "../../math"
import { Formatted } from "../format"

const parseMonzo = (monzoText: Formatted<Monzo>): Monzo => {
    const preparsedMonzoText = monzoText
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",")

    return JSON.parse(preparsedMonzoText)
}

export {
    parseMonzo,
}
