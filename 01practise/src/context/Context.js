import { createContext, useContext } from "react";


export const Context = createContext({
    objs:[
        {
            id: 1,
            msg: "hello",
            completed: false
        }
    ],
    addObj: (obj) => {},
    deleteObj: (id) => {},
    updateObj: (id, msg) => {},
    toggleComplete: (id) => {}
})

export const useCon = () => {
    return useContext(Context)
}

export const ProvideContext = Context.Provider

