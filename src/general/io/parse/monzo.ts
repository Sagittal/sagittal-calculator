import { MonzoNotDefaultingToRational } from "../../math"
import { Io } from "../types"

const parseMonzo = (monzoIo: Io): MonzoNotDefaultingToRational => {
    const preparsedMonzoIo = monzoIo
        .replace("⟩", "]")
        .replace(">", "]")
        .replace("|", "[")
        .replace(/\s*\[\s+/, "[")
        .replace(/\s+]\s*/, "]")
        .replace(/,\s*/g, ",")
        .replace(/\s+/g, ",")

    return JSON.parse(preparsedMonzoIo)
}

export {
    parseMonzo,
}
