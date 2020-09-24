import { Cents } from "../../music"
import { Formatted } from "../format"

const parseCents = (centsText: Formatted<Cents>): Cents => {
    const preparsedCentsText = centsText.replace("c", "").replace("¢", "")

    return parseFloat(preparsedCentsText) as Cents
}

export {
    parseCents,
}
