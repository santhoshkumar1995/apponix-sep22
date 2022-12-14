import { Rating, Typography } from "@mui/material";
import { useState } from "react";

interface IRating{
    rate:number
}
export const Rating1:React.FC<IRating>=(props)=>{
    var [value,setValue]=useState(props.rate)
    return<>
     <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event:any, newValue:any) => {
          setValue(newValue);
        }}
      />
    </>
}