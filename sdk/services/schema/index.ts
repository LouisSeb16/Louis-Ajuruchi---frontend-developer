import { filterArray } from "@/sdk/utils";
import { fetchAllRockets } from "../providers";
import { useRocketStore } from "../store"

export const rocketSchema = () => {
    const {
        rockets,
        searchRockets,
        loading,
        openViewRocketModal,
        setRockets,
        setRocketSearch,
        setLoading,
        setOpenViewRocketModal
    } = useRocketStore((state: any) => ({
        rockets: state.rockets,
        searchRockets: state.searchRockets,
        loading: state.loading,
        openViewRocketModal: state.openViewRocketModal,
        setRockets: state.setRockets,
        setRocketSearch: state.setRocketSearch,
        setLoading: state.setLoading,
        setOpenViewRocketModal: state.setOpenViewRocketModal
    }));

    const filter = {
        type: "type",
        country: "country"
    };

    const dataFromApi = {
        type: rockets.length > 0 && rockets.map((data: any) => data.rocket_type),
        country: rockets.length > 0 && rockets.map((data: any) => data.country),
    }

    const categories = {
        type: filterArray(dataFromApi.type),
        country: filterArray(dataFromApi.country),
    };

    const filteredRockets = rockets.length > 0 && rockets?.filter((rocketData: any) => {
        type Key = keyof typeof rockets;
        const currentValue: any = searchRockets as Key;

        if (currentValue === filter.type) {
            if (rocketData.rocket_type) {
                return currentValue in rocketData;
            }
        } else {
            if (currentValue === "") {
                return rocketData;
            } else if (rocketData.rocket_name.toLowerCase().includes(currentValue.toLowerCase())) {
                return rocketData;
            }else if (rocketData.country.toLowerCase().includes(currentValue.toLowerCase())) {
                return rocketData;
            }else if (rocketData.rocket_type.toLowerCase().includes(currentValue.toLowerCase())) {
                return rocketData;
            }
        }
    });

    const handleFetchAllRockets = async () => {
        const { data, status } = await fetchAllRockets();
        if (data && status === 200) setRockets(data);
    };

    return {
        store: {
            rockets,
            searchRockets,
            loading,
            openViewRocketModal,
            filteredRockets,
            categories
        },
        action: {
            setRockets,
            setRocketSearch,
            setLoading,
            setOpenViewRocketModal,
            handleFetchAllRockets
        }
    }
}