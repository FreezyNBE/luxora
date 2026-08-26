"use client";

import { createContext, useContext, useState } from "react";

type GlobalContextTypes = {
    bodyOverflowHidden: boolean;
    disableBodyOverflow: () => void;
    enableBodyOverflow: () => void;
};

const GlobalContext = createContext<GlobalContextTypes>({
    bodyOverflowHidden: false,
    disableBodyOverflow: () => {},
    enableBodyOverflow: () => {},
});

export const useGlobal = () => {
    return useContext(GlobalContext);
};

export default function GlobalContextProvider({ children }: { children: React.ReactNode }) {
    const [bodyOverflowHidden, setBodyOverflowHidden] = useState<boolean>(false);

    const disableBodyOverflow = () => {
        setBodyOverflowHidden(true);
    };

    const enableBodyOverflow = () => {
        setBodyOverflowHidden(false);
    };

    return (
        <GlobalContext.Provider
            value={{
                bodyOverflowHidden,
                disableBodyOverflow,
                enableBodyOverflow,
            }}
        >
            <body className="relative min-h-full" style={{ overflow: bodyOverflowHidden ? "hidden" : "auto" }}>
                {children}
            </body>
        </GlobalContext.Provider>
    );
}
