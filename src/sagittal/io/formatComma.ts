import { Comma, Formatted } from "../../general"
import { computeCommaName } from "../ji"

const formatComma = (comma: Comma): Formatted<Comma> => {
    return computeCommaName(comma) as string as Formatted<Comma>
}

export {
    formatComma,
}
