// TODO: computeN2D3P9 does not return Unpopularity, it returns N2D3P9
//  Perhaps N2D3P9 type should extend Unpopularity
//  But what I'm thinking about specifically here is that LPEI should return LPEI and LPE should return LPE
type N2D3P9 = number & {_N2D3P9Brand: boolean}

export {
    N2D3P9,
}
