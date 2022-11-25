import { useAuth } from "../context/authContext";

export function Home() {

  const {user, logout, loading} = useAuth()

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error);
    }
  }

  if (loading) return <h1>karma, to carregando</h1>

  return (
    <div className="w-full max-w-xs m-auto text-black">
      <div className="bg-white rounded shadon-md px-8 pt-6 pb-8 mb-4">
        <button onClick={handleLogout} className="underline w-full flex justify-end text-black text-sm">Logout</button>
        <h1 className="text-xl mb-4 pt-5">Bem vindo {user.displayName || user.email}</h1>
      </div>
    </div>
  )
}