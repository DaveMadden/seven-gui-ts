import React from 'react'

function Inputs() {
  return (
    <div className="stack">
      <label htmlFor='first'> first:</label>
      <input type="text" id="first" />
      
      <label htmlFor='last'> last:</label>
      <input type="text" id="last" />
      
      <div className="horiz">
        <button>Create</button>
        <button>Update</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Inputs