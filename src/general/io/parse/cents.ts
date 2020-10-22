import {Cents} from "../../music"
import {Io} from "../types"

const parseCents = (centsIo: Io): Cents => {
    const preparsedCentsText = centsIo.replace("c", "").replace("¢", "")

    return parseFloat(preparsedCentsText) as Cents
}

export {
    parseCents,
}
