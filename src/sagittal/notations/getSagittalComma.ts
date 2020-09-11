import { Id } from "../../general"
import { SAGITTAL_COMMAS } from "./sagittalCommas"
import { SagittalComma } from "./types"

const getSagittalComma = (sagittalCommaId: Id<SagittalComma>): SagittalComma => {
    const symbol = SAGITTAL_COMMAS.find(symbol => symbol.id === sagittalCommaId)

    if (!symbol) {
        throw new Error(`Sagittal comma with id ${sagittalCommaId} not found`)
    }

    return symbol
}

export {
    getSagittalComma,
}
