import { Id } from "../../general"
import { COMMA_CLASSES } from "./commaClasses"
import { CommaClass } from "./types"

const getCommaClass = (commaClassId: Id<CommaClass>): CommaClass => {
    const commaClass = COMMA_CLASSES.find((commaClass: CommaClass): boolean => commaClass.id === commaClassId)

    if (!commaClass) {
        throw new Error(`Comma class with ID ${commaClassId} not found`)
    }

    return commaClass
}

export {
    getCommaClass,
}
