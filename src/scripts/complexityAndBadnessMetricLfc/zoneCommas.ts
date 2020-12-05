import {Comma, Filename, NEWLINE, readLines} from "@sagittal/general"
import {CommaClassId} from "@sagittal/system"

const computeZoneCommaEntries = (secondaryCommaZones: boolean): Array<[CommaClassId, Comma[]]> => {
    const zoneCommaType = secondaryCommaZones ? "secondaryCommaZone" : "extremeCaptureZone"

    return Object.entries(JSON.parse(
        readLines(`src/scripts/jiPitch/results/${zoneCommaType}Commas.txt` as Filename).join(NEWLINE),
    )) as Array<[CommaClassId, Comma[]]>
}

export {
    computeZoneCommaEntries,
}
