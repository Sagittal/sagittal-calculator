import { Id } from "../../general"
import { SAGITTAL_COMMAS } from "./sagittalCommas"
import { SagittalComma } from "./types"

const getSagittalComma = (sagittalCommaId: Id<SagittalComma>): SagittalComma => {
    const sagittalComma = SAGITTAL_COMMAS
        .find((sagittalComma: SagittalComma): boolean => sagittalComma.id === sagittalCommaId)

    if (!sagittalComma) {
        throw new Error(`Sagittal comma with id ${sagittalCommaId} not found`)
    }

    return sagittalComma
}

export {
    getSagittalComma,
}
