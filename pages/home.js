/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/Layout";

import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session} = useSession();
  console.log({session});
  if(!session){
    return(
      <Layout>
        <div className="text-center w-full">
          <button className="bg-white rounded-lg p-2 px-4" onClick={() => signIn('google')}>Iniciar Sesion con Google</button>
        </div>
      </Layout>
    )
  }

    return(
      <Layout>
        <div className="flex justify-between">
            <h1>Bienvenido, <b>{session?.user?.name}</b></h1>
          <div className="flex gap-1 bg-gray-300 text-black rounded-lg">
            <img src={session?.user?.image} alt="imagen de perfil" className="w-9 h-9 rounded-full"/>
              <span className="px-2">
                {session?.user?.name}
              </span>
          </div>
        </div>
      </Layout>
    )
}
