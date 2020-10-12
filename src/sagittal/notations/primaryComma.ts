import { Id } from "../../general"
import { getCommaClass } from "./commaClass"
import { PRIMARY_COMMAS } from "./primaryCommas"
import { CommaClass, PrimaryComma } from "./types"

const getPrimaryComma = (commaClassId: Id<CommaClass>): PrimaryComma => {
    const commaClass = getCommaClass(commaClassId)

    const primaryComma = PRIMARY_COMMAS
        .find((primaryComma: PrimaryComma): boolean => primaryComma.id === commaClass.primaryCommaId)

    if (!primaryComma) {
        throw new Error(`Primary comma with ID ${commaClass.primaryCommaId} not found`)
    }

    return primaryComma
}

export {
    getPrimaryComma,
}
