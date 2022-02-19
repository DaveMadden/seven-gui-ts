import React from 'react'
import Filter from './CRUD_comps/Filter'
import Inputs from './CRUD_comps/Inputs'
import NameList from './CRUD_comps/NameList'

function CRUD(): JSX.Element{
  return (
    <div className="thing horiz">
        <div className="leftright">
            <Filter/>
            <NameList/>
        </div>
        <div className="leftright">
            <Inputs/>
        </div>

    </div>
  )
}

export default CRUD