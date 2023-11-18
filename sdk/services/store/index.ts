import { IRocketStore } from "@/sdk/interface";
import { create } from "zustand";
import { createJSONStorage, persist, devtools } from 'zustand/middleware';

export const useRocketStore = create<IRocketStore>()(
    devtools(
        persist(
            (set) => ({
                rockets: [],
                setRockets: (param: any) => set(() => ({ rockets: param })),
                searchRockets: '',
                setRocketSearch: (param: any) => {
                    set(() => ({
                        searchRockets: param
                    }))
                },
                loading: false,
                setLoading: (param: boolean) => set({ loading: param }),
                openViewRocketModal: false,
                setOpenViewRocketModal: (param: boolean) => {
                    set({ openViewRocketModal: param });
                },
            }),
            {
                name: 'Rockets',
                storage: createJSONStorage(() => localStorage),
            }
        )
    )
);