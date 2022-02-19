import React from 'react'

function NameList() {
  return (
    <div>
      <select className="full-width" id="list" name="list" size={5}> {/** map over the state array to create options */}
        <option value="one">one</option>
        <option value="two">two</option>
        <option value="three">three</option>
      </select>
    </div>
  )
}

export default NameList