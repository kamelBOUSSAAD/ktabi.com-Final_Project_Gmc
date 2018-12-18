import React from 'react'
import { Select } from 'semantic-ui-react'

let countryOptions=["Ariana","sousse","sfax","jendouba","gabes"]

const SelectBox=(props)=>{
    
return(
    <div >
     <Select placeholder={props.value} options={countryOptions} />
    </div>
)
    }


export default SelectBox;