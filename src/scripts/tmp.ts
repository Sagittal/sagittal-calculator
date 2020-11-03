// tslint:disable no-reaching-imports

import {Filename, NEWLINE, setupCommandAndIo, readLines} from "../general"
import {ScriptGroup} from "./types"

setupCommandAndIo(ScriptGroup.TMP as Filename)

// This is a great place to paste stuff you need to run without Jasmine swallowing the stacktrace!
// Just paste whatever you need here and run `npm run tmp`.

const tmp = JSON.parse(readLines("src/scripts/tmp.txt" as Filename).join(NEWLINE))
