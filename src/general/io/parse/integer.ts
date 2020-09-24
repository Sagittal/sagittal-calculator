import { Integer } from "../../math"

const parseInteger = (integerIo: string): Integer => {
    return parseInt(integerIo) as Integer
}

export {
    parseInteger,
}
