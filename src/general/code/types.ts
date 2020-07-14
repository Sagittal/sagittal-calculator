type EnumHash<Enum extends string, ValueType> = { [key in Enum]: ValueType }

export {
    EnumHash,
}
