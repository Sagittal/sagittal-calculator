import {Comma, Name, RecordKey} from "../../general"
import {INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS} from "./constants"
import {JiPitchScriptGroupSettings} from "./types"

const jiPitchScriptGroupSettings: JiPitchScriptGroupSettings =
    JSON.parse(JSON.stringify(INITIAL_JI_PITCH_SCRIPT_GROUP_SETTINGS))

const metacommaNameToMetacommaMap: Record<RecordKey<Name<Comma>>, Comma> = {}

export {
    jiPitchScriptGroupSettings,
    metacommaNameToMetacommaMap,
}
