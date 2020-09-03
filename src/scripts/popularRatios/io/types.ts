import { Formatted, Ratio } from "../../../general"
import { Tina } from "../../../sagittal"

interface MetacommaResult {
    tinas: Tina,
    newExactNotation: Record<string, Formatted<Ratio>>
}

export {
    MetacommaResult,
}
