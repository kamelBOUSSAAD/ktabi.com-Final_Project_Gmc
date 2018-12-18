import React from 'react'
import './././search.css'
import { Icon, Input } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'


class Search extends React.Component{
    render(){
        return(
            <div>
           <Input icon={<Icon name='search' inverted circular link />} placeholder='Search...' />
            </div>
        )
    }
}

export default Search;