import React from "react";

class Root{
    constructor(){
    }
}
const root=new Root()
const context=React.createContext(root)
const RootStore=()=>React.useContext(context)
export {RootStore}