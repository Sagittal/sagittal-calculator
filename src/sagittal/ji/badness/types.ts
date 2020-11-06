type Badness = number & {_BadnessBrand: boolean}

type LPEI = Badness & {_LPEIBrand: boolean}

export {
    Badness,
    LPEI,
}
