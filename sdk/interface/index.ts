export type userState = {
    data: string;
}

export type IRocketStore = {
    rockets: any;
    setRockets: (param: any) => void;
    loading: boolean;
    setLoading: (param: boolean) => void;
    searchRockets: any;
    setRocketSearch: (data: userState['data']) => void;
    openViewRocketModal: boolean;
    setOpenViewRocketModal: (data: boolean) => void;
}