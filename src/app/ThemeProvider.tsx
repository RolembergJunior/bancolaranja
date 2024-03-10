'use client'

import { ReactNode, useEffect } from "react";
import { ThemeProvider } from "next-themes";


interface Props{
    children: ReactNode
}

export default function Provider({ children }: Props){

    return(
        <ThemeProvider attribute="class" enableSystem={ false }>
            {children}
        </ThemeProvider>
    );
}