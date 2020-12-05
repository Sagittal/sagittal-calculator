import {Filename, Io, parse23FreeClass, readLines, Two3FreeClass} from "@sagittal/general"
import {analyze23FreeClass} from "@sagittal/system"
import {computePopular23FreeClass} from "./popular23FreeClass"
import {Popular23FreeClass} from "./types"

const computeKnownPopular23FreeClasses = (): Popular23FreeClass[] => {
    const knownPopular23FreeClasses =
        readLines("src/scripts/popular23FreeClass/input/knownPopular23FreeClasses.txt" as Filename)
            .map((knownPopular23FreeClassIo: Io): Two3FreeClass => {
                return parse23FreeClass(knownPopular23FreeClassIo)
            })

    return knownPopular23FreeClasses
        .map((two3FreeClass: Two3FreeClass): Popular23FreeClass => {
            return computePopular23FreeClass(analyze23FreeClass(two3FreeClass))
        })
}

export {
    computeKnownPopular23FreeClasses,
}
