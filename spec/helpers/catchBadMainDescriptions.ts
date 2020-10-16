import * as fs from "fs"
import * as path from "path"
import { isUndefined, Maybe } from "../../src/general/code"
import { Filename, Io, readLines } from "../../src/general/io"

const INDEX_OF_CAPTURED_GROUP = 1

const catchBadMainDescriptions = (basePath: Filename): void => {
    for (const file of fs.readdirSync(basePath)) {
        const filename = path.join(basePath, file) as Filename

        if (fs.lstatSync(filename).isDirectory()) {
            catchBadMainDescriptions(filename)
        } else if (!new RegExp("verificationSpecs").test(filename) && !new RegExp("commands").test(filename)) {
            const lines = readLines(filename)

            let subjectDescription: Maybe<string> = undefined

            lines.forEach((line: Io): void => {
                let maybeDescribeMatches = line.match(/^describe\("(\w+)/)
                if (maybeDescribeMatches !== null) subjectDescription = maybeDescribeMatches[ INDEX_OF_CAPTURED_GROUP ]

                let subjectActual = line.match(/\s*const actual = (?:await )?(\w+)/)
                if (
                    subjectActual !== null
                    && !isUndefined(subjectDescription)
                    && subjectDescription !== subjectActual[ INDEX_OF_CAPTURED_GROUP ]
                ) {
                    console.warn(`Mismatched main description and subject in module ${filename}: description says ${subjectDescription} but actual is ${subjectActual[ INDEX_OF_CAPTURED_GROUP ]}`)
                }
            })
        }
    }
}

catchBadMainDescriptions("spec/src" as Filename)
