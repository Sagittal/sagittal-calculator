import {Comma, Formatted} from "@sagittal/general"
import {computeCommaName} from "./commaName"

const formatComma = (comma: Comma): Formatted<Comma> => {
    return computeCommaName(comma) as string as Formatted<Comma>
}

export {
    formatComma,
}
