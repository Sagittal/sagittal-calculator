import {Comma, Name, RecordKey, Step} from "@sagittal/general"
import {DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS} from "./constants"
import {JiPitchScriptGroupSettings} from "./types"

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(DEFAULT_JI_PITCH_SCRIPT_GROUP_SETTINGS))

const metacommaNameToMetacommaMap: Record<RecordKey<Name<Comma>>, Comma> = {}
const inconsistentMetacommas: Record<RecordKey<Name<Comma>>, Step> = {}

export {
    jiPitchScriptGroupSettings,
    metacommaNameToMetacommaMap,
    inconsistentMetacommas,
}
