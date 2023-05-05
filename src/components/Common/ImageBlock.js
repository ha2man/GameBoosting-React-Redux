import React from 'react'

function ImageBlock({url, size, color}) {
    return (
        <img style={{
            borderRadius:'50%',
            border:`10px solid rgba(${color},0.7)`,
            backgroundColor:`rgba(${color},0.3)`,
            boxShadow:`0 0px 10px rgba(${color})`,
            padding:'1rem',
        }} src={url} alt="img" width={size} height={size} />
    )
}

export default ImageBlock;