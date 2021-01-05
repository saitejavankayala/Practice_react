import React from 'react'
import './css/myStyle.css'

function Stylesheet(props){
    let className=props.secondary?'secondary':''
    return(
        <div>
            <h1 className={`{$className} font-xl` }>coloring the file using props</h1>
            <h1 className='primary'>Coloring the files</h1>
        </div>
    )
}
export default Stylesheet