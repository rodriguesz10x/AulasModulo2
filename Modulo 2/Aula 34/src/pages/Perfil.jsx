import {useContext} from "react"
import {UserContext} from '../contexts/UserContext'

const Perfil = () => {

  let {user,setUser} = useContext(UserContext)

  return (
    <div>
      <h1>Página Perfil</h1>
    </div>
  )

}

export default Perfil