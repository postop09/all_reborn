import React, {createContext, useEffect, useState} from "react";

const AppContext = createContext({});

interface contextProps {
    children: React.ReactNode | React.ReactNode[];
}

const AppProvider = ({children}: contextProps) => {
    const storage = localStorage.getItem("recentKeyword");
    const [recentKeyword, setRecentKeyword] = useState<string[]>([]);

    if (!storage) {
        localStorage.setItem("recentKeyword", JSON.stringify([]));
    }

    useEffect(() => {
        if (storage) {
            const arr = JSON.parse(storage);
            setRecentKeyword(arr);
        }
    }, []);

    // TODO - store type 설정 고민해봐야 함.
    const store = {
        recentKeyword, setRecentKeyword,
    };

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    );
}

export {
    AppProvider,
    AppContext,
}