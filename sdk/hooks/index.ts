import { useEffect } from "react";
import { rocketSchema } from "../services/schema"

export const useRocketHooks = () => {
    const rocketServices = rocketSchema();

    const {
        store: { },
        action: {
            handleFetchAllRockets
        }
    } = rocketServices;

    useEffect(() => {
        handleFetchAllRockets();
    }, []);

    return rocketServices;
};