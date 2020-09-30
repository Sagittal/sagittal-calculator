import { computeDecimalFromReal, Real } from "../../math"
import { computeCents } from "../../music"
import { ANY_DECIMAL_CHARS } from "../constants"
import { formatCents } from "./cents"
import { formatReal } from "./real"
import { Formatted } from "./types"

const formatPitch = (pitch: Real, options: { align?: boolean } = {}): Formatted<Real> => {
    const formattedNum = formatReal(pitch, options)

    if (formattedNum.match(ANY_DECIMAL_CHARS)) {
        return formatCents(
            computeCents(
                computeDecimalFromReal(pitch),
            ),
            options,
        ) as Formatted as Formatted<Real>
    } else {
        return formattedNum
    }
}

export {
    formatPitch,
}
