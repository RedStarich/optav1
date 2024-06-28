'use client';
import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext({});

const ContextProvider = (props : any) => {

    const [input, setInput] = useState("");
    

    const onSent = async (prompt : string) => {
        await run(prompt);
    }

    onSent("hello");

    const contextValue = {
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;