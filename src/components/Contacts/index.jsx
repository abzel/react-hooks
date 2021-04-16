import React from 'react'
import { useLocation, useParams, useRouteMatch } from 'react-router-dom'

export const Contacts = () => {

    const location = useLocation()
    const params = useParams()
    const match = useRouteMatch();

    console.log("location", location)
    console.log("params", params)
    console.log("match", match)

    return <div>
        Contacts
        <button onClick={() => window.location.reload()}>reload</button>
    </div>
}