/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";
import { useSession, signIn } from "next-auth/react"; // Add the missing import statement for 'signIn' function

export default function Home() {
  const { data: session} = useSession();
  console.log({session});
  if(!session){
    return(
      <Layout>
        <div className="text-center w-full">
          <button className="bg-white rounded-lg p-2 px-4" onClick={() => signIn('google')}>Iniciar Sesion con Google</button>
        </div>
        <img src={session?.user?.image} alt="imagen de perfil" className="w-10 h-10 rounded-full"/>
      </Layout>
    )
  }

    return(
      <Layout>
        <div className="flex justify-between">
            <h1>Bienvenido, <b>{session?.user?.name}</b></h1>
          <div className="flex gap-1 bg-gray-300 text-black rounded-lg">
            <img src={session?.user?.image} alt="imagen de perfil" className="w-10 h-10 rounded-full"/>
              <span className="px-2">
                {session?.user?.name}
              </span>
          </div>
        </div>
      </Layout>
    )
}
