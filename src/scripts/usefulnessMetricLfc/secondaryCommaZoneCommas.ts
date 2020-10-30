import {Comma, Filename, NEWLINE, readLines} from "../../general"
import {CommaClassId} from "../../sagittal"

// TODO: Exception the commas in the code not be deleting them from the txt file
//  And move them to results of JI script
const SECONDARY_COMMA_ZONE_COMMAS_ENTRIES = Object.entries(JSON.parse(
    readLines("src/scripts/usefulnessMetricLfc/input/secondaryCommaZoneCommas.txt" as Filename).join(NEWLINE),
)) as Array<[CommaClassId, Comma[]]>

export {
    SECONDARY_COMMA_ZONE_COMMAS_ENTRIES,
}
