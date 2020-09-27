import { computeDecimalFromNum, Num } from "../../math"
import { computeCentsFromDecimal } from "../../music"
import { ANY_DECIMAL_CHARS } from "../constants"
import { formatCents } from "./cents"
import { formatNum } from "./num"
import { Formatted } from "./types"

const formatPitch = (pitch: Num, options: { align?: boolean } = {}): Formatted<Num> => {
    const formattedNum = formatNum(pitch, options)

    if (formattedNum.match(ANY_DECIMAL_CHARS)) {
        return formatCents(
            computeCentsFromDecimal(
                computeDecimalFromNum(pitch),
            ),
            options,
        ) as Formatted as Formatted<Num>
    } else {
        return formattedNum
    }
}

export {
    formatPitch,
}
