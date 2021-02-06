import React, { useState, useEffect } from 'react'
import Loader from './../../components/Loader'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'

export default Profile = ({ navigation }) => {
    const [logged, setLogged] = useState(false)
    const [loading, setLoading] = useState(false)

    if (loading) {
        return <Loader isVisible={loading} text="Cargando..." />
    }

    return logged ? <UserLogged /> : <UserGuest navigation={navigation} />
}
