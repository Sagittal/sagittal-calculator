import { isUndefined } from "../../code"
import { computeCentsFromDecimal, Pitch } from "../../music"
import { stringify } from "../stringify"
import { formatCents } from "./cents"
import { formatMonzo } from "./monzo"
import { formatRatio } from "./ratio"
import { Formatted } from "./types"

const formatPitch = (pitch: Pitch, options: { align?: boolean } = {}): Formatted<Pitch> => {
    const { ratio, monzo, cents, decimal } = pitch
    if (!isUndefined(ratio)) {
        return formatRatio(ratio) as Formatted as Formatted<Pitch>
    } else if (!isUndefined(monzo)) {
        return formatMonzo(monzo) as Formatted as Formatted<Pitch>
    } else if (!isUndefined(cents)) {
        return formatCents(cents, options) as Formatted as Formatted<Pitch>
    } else if (!isUndefined(decimal)) {
        return formatCents(computeCentsFromDecimal(decimal), options) as Formatted as Formatted<Pitch>
    }

    throw new Error(`Tried to format pitch ${stringify(pitch)} but it had no numeric members.`)
}

export {
    formatPitch,
}
