import { createContext, useContext, useState } from "react";

const dataContext = createContext(null);

const DataProvider = ({ children }) => {
    const sidebarCollasped = localStorage.getItem("sidebar-collasped");
    const [isExpanded, setIsExpanded] = useState(sidebarCollasped ? true : false);

    return (
        <dataContext.Provider value={{ isExpanded, setIsExpanded }}>
            {
                children
            }
        </dataContext.Provider>
    )
}

const useData = () => useContext(dataContext);

export { DataProvider, useData }