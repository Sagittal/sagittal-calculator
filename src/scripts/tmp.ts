// tslint:disable no-reaching-imports

import { Filename, ioSettings, parseCommands } from "../general"
import { ScriptGroup } from "./types"

ioSettings.scriptGroup = ScriptGroup.TMP as Filename
parseCommands(ScriptGroup.TMP as Filename)

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `npm run tmp`.
