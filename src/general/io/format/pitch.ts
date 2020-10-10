import { isQuotientRational, isScamonRational, Scamon } from "../../math"
import { computeCentsFromPitch } from "../../music"
import { ioSettings } from "../globals"
import { TableFormat } from "../table"
import { formatCents } from "./cents"
import { formatMonzo } from "./monzo"
import { formatQuotient } from "./quotient"
import { Formatted } from "./types"

const formatPitch = (pitch: Scamon, options: { align?: boolean, noLaTeXScaler?: boolean } = {}): Formatted<Scamon> => {
    if (isScamonRational(pitch)) {
        return formatMonzo(pitch.monzo) as Formatted as Formatted<Scamon>
    } else {
        const { scaler, monzo } = pitch
        if (isQuotientRational(scaler)) {
            const tableFormat = options.noLaTeXScaler ? TableFormat.TERMINAL : ioSettings.tableFormat
            const formatQuotientOptions = { ...ioSettings, tableFormat }

            return `${formatMonzo(monzo)}(${formatQuotient(scaler, formatQuotientOptions)})` as Formatted<Scamon>
        } else {
            return formatCents(computeCentsFromPitch(pitch), options) as Formatted as Formatted<Scamon>
        }
    }
}

export {
    formatPitch,
}
