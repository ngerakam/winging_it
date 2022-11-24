import React from 'react'

function TextArea({numRows,mySt}) {
  return (
    <div className="form-group">

    <textarea  className={mySt} rows={numRows} placeholder="Write your message ..."/>
    </div>
      
  )
}

export default TextArea