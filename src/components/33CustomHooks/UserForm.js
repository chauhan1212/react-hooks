import React, { useState } from 'react'

function UserForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} type='text' />
            </div>
            <div>
                <label>Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} type='text' />
            </div>            
            <button>Sumbit</button>
        </form>
    </div>
  )
}

export default UserForm