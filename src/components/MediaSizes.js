const sizes={
    mobile: '420px',
    ipad: '850px',
    laptop: '900px'
}


export const devices = {
    mobile: `(max-width:${sizes.mobile})`,
    ipad: `(max-width:${sizes.ipad})`,
    laptop: `(min-width:${sizes.laptop})`
}