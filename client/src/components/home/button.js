import React from 'react'
import {Button} from 'semantic-ui-react'

// eslint-disable-next-line no-redeclare
const ButtonSign=(props)=>{

return(
    <div>
        <Button>{props.value}</Button>
    </div>
)
}
export default ButtonSign;