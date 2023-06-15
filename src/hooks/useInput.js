import React, { useState } from 'react'

function useInput(intialValue) {
    const [value, setValue]  = useState(intialValue)

    const reset = () => {
        setValue(intialValue)
    }

    const bind = {
        value:value,   // just 'value' instead of 'value:value' is es6 feature
        onChange : e => {
            setValue(e.target.value)
        }
    }
    return [value, bind, reset]
}

export default useInput