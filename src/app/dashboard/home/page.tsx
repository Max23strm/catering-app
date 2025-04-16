import React from 'react'
import { Button } from "@/components/ui/button"
import Loading from '@/components/custom/Loading'
const page = () => {
    return (
        <main className="flex flex-col gap-[32px] h-screen row-start-2 items-center sm:items-start bg-accent justify-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" >
                Bienvenido
            </h1>
            <Loading text={'Cargando...'} textSize={'text-l'}/>
            <Button>Perolaputa madre</Button>
        </main>
    )
}

export default page