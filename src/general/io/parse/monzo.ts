import { Monzo } from "../../math"
import { Io } from "../types"

// TODO: this could be given as an irrational Monzo. you even test cover it as such. but this Monzo
//  type defaults to rational, so it's a lie and could get you in trouble. but it's not an easy problem to fix
//  having this return a MonzoNotDefaultingToRational
const parseMonzo = (monzoIo: Io): Monzo => {
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
