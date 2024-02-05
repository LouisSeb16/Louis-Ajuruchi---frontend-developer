'use client';

import { filterArray, processDataStatus } from "@/sdk/utils";
import { fetchAllRockets } from "../providers";
import { useRocketStore } from "../store"
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

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

    const { replace } = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();

    const handleSearch = useDebouncedCallback((value: any) => {
        const params = new URLSearchParams(searchParams);
        setRocketSearch(value);
        params.set('page', '1');
        value ? params.set('query', value) : params.delete('query');
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleFetchAllRockets = async () => {
        const { data, status, message } = await fetchAllRockets();
        processDataStatus({
            data: data, status: status, error: message,
            setData: (data: any) => setRockets(data),
            clearData: () => setRockets([])
        });
    };

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
            } else if (rocketData.country.toLowerCase().includes(currentValue.toLowerCase())) {
                return rocketData;
            } else if (rocketData.rocket_type.toLowerCase().includes(currentValue.toLowerCase())) {
                return rocketData;
            }
        }
    });

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
            handleFetchAllRockets,
            handleSearch
        }
    }
}