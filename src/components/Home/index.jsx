import React from 'react'
import { useHistory } from 'react-router-dom'

export const Home = () => {

    const history = useHistory()
    console.log(history)

    return <div>
        <button onClick={() => history.push('/contacts')}>go to contacts</button>
    </div>
}