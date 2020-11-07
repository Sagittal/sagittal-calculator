import {Comma, Name, RecordKey, Step} from "../../general"
import {INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS} from "./constants"
import {JiPitchScriptGroupSettings} from "./types"

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS))

const metacommaNameToMetacommaMap: Record<RecordKey<Name<Comma>>, Comma> = {}
const inconsistentMetacommas: Record<RecordKey<Name<Comma>>, Step> = {}

export {
    jiPitchScriptGroupSettings,
    metacommaNameToMetacommaMap,
    inconsistentMetacommas,
}
