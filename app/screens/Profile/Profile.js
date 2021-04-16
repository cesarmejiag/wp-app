import React, { useState, useEffect, useContext } from 'react'
import Loader from './../../components/Loader'
import UserGuest from './UserGuest'
import UserLogged from './UserLogged'
import UserContext from '../../context/User/UserContext';

export default Profile = ({ navigation }) => {
    const {currentUser} = useContext(UserContext);

    // const [logged, setLogged] = useState(false)
    const [loading, setLoading] = useState(false)

    if (loading) {
        return <Loader isVisible={loading} text="Cargando..." />
    }

    // console.log("--------------------Profile--------------------------");
    // console.log(currentUser);

    return currentUser ? <UserLogged navigation={navigation}/> : <UserGuest navigation={navigation} />
}
