type Complexity = number & {_ComplexityBrand: boolean}

type SecorComplexity = Complexity & {_SecorComplexityBrand: boolean}

type LPE = Complexity & {_LPEBrand: boolean}

export {
    Complexity,
    SecorComplexity,
    LPE,
}
