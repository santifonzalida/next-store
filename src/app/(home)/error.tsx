"use client"
import { useEffect } from "react";

interface ErrorProps {
    error: Error;
    reset: () => void;
}

export default function Error({error, reset}: ErrorProps) {

    useEffect(() => {
        console.log(error)
    },[]);

    return(
        <div>
            <h1>
                :|
            </h1>
            <div>
                <p>Ha ocurrido un error</p>
                <button onClick={reset}>Intentar nuevamente</button>
            </div>
        </div>
    )
}