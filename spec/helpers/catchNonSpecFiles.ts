import * as fs from "fs"
import * as path from "path"
import { Filename } from "../../src/general/io/types"

const regexp = new RegExp(".*Spec\.ts")

const catchNonSpecFiles = (startPath: Filename): void => {
    const files = fs.readdirSync(startPath)
    for (const file of files) {
        const filename = path.join(startPath, file) as Filename
        const stat = fs.lstatSync(filename)

        const match = regexp.test(filename)

        if (stat.isDirectory()) {
            catchNonSpecFiles(filename)
        } else if (!match) {
            throw new Error(`Spec is not named properly and will not run: ${filename}`)
        }
    }
}

catchNonSpecFiles("spec/src" as Filename)
