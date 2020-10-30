import {Comma, Filename, NEWLINE, readLines} from "../../general"
import {CommaClassId} from "../../sagittal"
import {usefulnessMetricLfcScriptGroupSettings} from "./globals"

const computeZoneCommaEntries = (): Array<[CommaClassId, Comma[]]> => {
    const zoneCommaType = usefulnessMetricLfcScriptGroupSettings.extremeCaptureZones ?
        "extremeCaptureZone" :
        "secondaryCommaZone"

    return Object.entries(JSON.parse(
        readLines(`src/scripts/jiPitch/results/${zoneCommaType}Commas.txt` as Filename).join(NEWLINE),
    )) as Array<[CommaClassId, Comma[]]>
}

export {
    computeZoneCommaEntries,
}
