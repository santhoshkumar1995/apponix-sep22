

import { Grid } from "@mui/material"
import { useEffect, useState } from "react"



import { Myapi } from "../../components/Api/Myapi"
import { Card2 } from "../../components/card2/Card2"

interface Ijewellery { }
interface Irating {
    count: number, rate: number
}
interface Ijewellerypro {
    category: string,
    description: string,
    id: number,
    image: string
    price: number
    rating: Irating
    title: string

}
export const Jewellery1: React.FC<Ijewellery> = () => {
    var [localstate, setLocalstate] = useState<Ijewellerypro[]>([])
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
                <Grid container spacing={1}>

                    <Grid item xs={12}>
                        <Card2 description={p.description} image={p.image} price={p.price} rating={p.rating} title={p.title} />
                    </Grid>

                </Grid>

                


            </>



        })}
    </>

}

