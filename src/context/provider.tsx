// ThemeContext.js
"use client"
import React, { createContext, useState } from 'react';
interface IAppProvider {
    cart?: any[];
    activeTab?: string;
    changeToAirtime?: any
    changeToMObileDate?: any
    changeNetwork?: any
    network?: string;
    form?: any
    handleForm?: any;
    clearForm?: any;
    addToCart?: any
    toggleCart?: any
    openCart?: boolean

}
export const AppContext = createContext<IAppProvider>({ cart: [] });


export const AppProvider = ({ children }: any) => {
    const [cart, setCart] = useState<any[]>([]);
    const [openCart, setOpenCart] = useState(false);
    const [form, setForm] = useState({})
    const [activeTab, setActiveTab] = useState("airtime")
    const [network, setNetwork] = useState("mtn")
    const changeToAirtime = () => {
        setActiveTab("airtime")
        clearForm()
    }
    const handleForm = (e: any) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const clearForm = () => {
        setForm({})
    }
    const changeToMObileDate = () => {
        setActiveTab("mobileData")
        clearForm()
    }
    const changeNetwork = (val: string) => {
        setNetwork(val)
    }

    const addToCart = (values: any) => {
        setCart((prev: any[]) => ([...prev, values]))
    }
    const toggleCart = () => {
        setOpenCart((prev) => !prev)
    }

    return (
        <AppContext.Provider value={{ cart, addToCart, activeTab, changeToAirtime, changeToMObileDate, network, changeNetwork, form, clearForm, handleForm, toggleCart, openCart }}>
            {children}
        </AppContext.Provider>
    );
};
