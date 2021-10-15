import React, { ObjectHTMLAttributes } from 'react'
import theme from '../../theme';
import { Button, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles((theme: Theme) => {
     console.log(theme);

  return({
    button: {
        color: theme.palette.primary.main,
    },}
  )
});



export default function Home() {
   const classes = useStyle();



    return (
        <div>
           

            <Button
              fullWidth
              variant="contained"
              className={classes.button}
              
            >
              Entrar
            </Button>

        </div>
    )
}
