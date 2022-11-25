import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate, Link } from "react-router-dom";
import Alert from "./Alert";

export function Register() {

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const { signup } = useAuth()

  const navigate = useNavigate()

  const [error, setError] = useState();

  const handleChange = ({target: {name, value}}) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await signup(user.email, user.password)
      navigate('/')

    } catch (error) {

      setError(error.message)
      
    }
  }


  return (
    <div className="w-full max-w-xs m-auto">
      
      {error && <Alert message={ error } /> }
    
      <p className="text-sm my-1 text-right text-blue-500"><Link to='/Login'>Já possui registro? Faça seu login</Link></p>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">E-mail</label>
          <input type="text" name="email" placeholder="E-mail @frat.ag" className="text-sm shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Senha</label>
          <input type="password" name="password" id="password" placeholder="Sua melhor senha" className="text-sm shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <button className="bg-blue-500 hover:blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">Registre-se</button>

      </form>

    </div>
  )
}