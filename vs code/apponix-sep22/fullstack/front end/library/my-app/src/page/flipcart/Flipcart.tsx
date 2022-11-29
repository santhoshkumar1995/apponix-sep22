
import { useEffect, useState } from "react"

import { Myapi } from "../../components/Api/Myapi"

import { Mycard } from "../../components/my card/Mycard"

interface IFlipcart { }

interface IFlipcartpro {
    category: string,
   
    id: number,
    image: string
    price: number
    
    title: string

}
export const Flipcart: React.FC<IFlipcart> = () => {
    var [localstate, setLocalstate] = useState<IFlipcartpro[]>([])
    useEffect(() => {
        Myapi().then((a) => {
            console.log(a)
            setLocalstate(a)

        })

    }, [])






    return <>
        <h1>category:{localstate[0]?.category}</h1>
        {localstate.map((p: any) => {
            return <>
            <br />
            <Mycard  img={p.image} price={p.price} title={p.title} />
                

            </>



        })}
    </>

}

