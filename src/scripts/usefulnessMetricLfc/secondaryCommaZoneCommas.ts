import {Comma, Filename, NEWLINE, readLines} from "../../general"
import {CommaClassId} from "../../sagittal"

const SECONDARY_COMMA_ZONE_COMMAS_ENTRIES = Object.entries(JSON.parse(
    readLines("src/scripts/usefulnessMetricLfc/input/secondaryCommaZoneCommas.txt" as Filename).join(NEWLINE),
)) as Array<[CommaClassId, Comma[]]>

export {
    SECONDARY_COMMA_ZONE_COMMAS_ENTRIES,
}
