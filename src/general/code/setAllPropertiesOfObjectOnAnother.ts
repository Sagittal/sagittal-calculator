import { deepClone } from "./clone"

const setAllPropertiesOfObjectOnAnother = ({ objectToChange, objectWithProperties }: {
    objectToChange: unknown,
    objectWithProperties: unknown,
}): void => {
    Object.entries(objectWithProperties as Record<string, unknown>)
        .forEach(([key, value]: [string, unknown]): void => {
            (objectToChange as Record<string, unknown>)[ key ] = deepClone(value)
        })
}

export {
    setAllPropertiesOfObjectOnAnother,
}
