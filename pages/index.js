import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  const { data: session } = useSession();
  if (!session) {
    return (
      <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
        <div className="text-center w-full">
          <button className="bg-white rounded-lg p-2 px-4" onClick={() => signIn()}> Sesion con Google</button>
        </div>
      </div>
    );
  }
  return (
    <div className={"bg-blue-900 w-screen h-screen flex items-center"}>
      <div className="text-center w-full">
        <h1 className="text-white text-2xl">Bienvenido {session.user.name}</h1>
        <button className="bg-white p-2 rounded-lg px-4" onClick={() => signOut()}>Cerrar Sesion</button>
      </div>
    </div>
  );
}
