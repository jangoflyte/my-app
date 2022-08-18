import { useState, useCallback } from "react";

export const useToggle = () => {
    const [toggleBool, setToggleBool] = useState(false);

    const toggle = useCallback(() => {
        setToggleBool(!toggleBool) //
    }, [toggleBool]);

    return [toggleBool, toggle]
}