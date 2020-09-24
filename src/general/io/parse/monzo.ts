import { Monzo } from "../../math"
import { Formatted } from "../format"

// TODO: okay seriously is this stuff [blank]text? or formatted?
//  I like the idea of it not having to be formatted b/c it's not OUTPUT.
//  it's from the user; it could be a total mses..
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
