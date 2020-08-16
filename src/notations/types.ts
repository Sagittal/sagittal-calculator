type SymbolLongAscii = string & { _SymbolLongAsciiBrand: "SymbolLongAscii" }
type SymbolUnicode = string & { _SymbolUnicodeBrand: "SymbolUnicode" }
type SymbolSmiley = string & { _SymbolSmileyBrand: "SymbolSmiley" }

export {
    SymbolLongAscii,
    SymbolUnicode,
    SymbolSmiley,
}
