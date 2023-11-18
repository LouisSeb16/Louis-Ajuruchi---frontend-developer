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

    const handleFetchAllRockets = async () => {
        const { data, status } = await fetchAllRockets();
        if (data && status === 200) setRockets(data);
    };

    return {
        store: {
            rockets,
            searchRockets,
            loading,
            openViewRocketModal
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