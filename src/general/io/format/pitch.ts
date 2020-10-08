import { isQuotientRational } from "../../math"
import { computeCentsFromPitch, isJi, Pitch } from "../../music"
import { formatCents } from "./cents"
import { formatMonzo } from "./monzo"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const formatPitch = (pitch: Pitch, options: { align?: boolean } = {}): Formatted<Pitch> => {
    if (isJi(pitch)) {
        return formatMonzo(pitch.monzo) as Formatted as Formatted<Pitch>
    } else {
        const { scaler, monzo } = pitch
        if (isQuotientRational(scaler)) {
            return `${formatMonzo(monzo)}(${formatQuotient(scaler)})` as Formatted as Formatted<Pitch>
        } else {
            return formatCents(computeCentsFromPitch(pitch), options) as Formatted as Formatted<Pitch>
        }
    }
}

export {
    formatPitch,
}
