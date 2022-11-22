import React from 'react'

function ContactForm({mytype,dummyText}) {
  return (
    <>
    <div class="form-floating">
      <input
       type={mytype}
       className="form-control" 
       placeholder={dummyText}/>
      <label for="floatingInput">{mytype}</label>
    </div>
    </>
  )
}

export default ContactForm