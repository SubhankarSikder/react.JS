import { createContext, useContext } from "react";


export const Context = createContext({
    objs:[
        {
            id: 1,
            msg: "hello",
            completed: false
        }
    ],
    addObj: (msg) => {}
})

export const useCon = () => {
    return useContext(Context)
}

export const ProvideContext = Context.Provider