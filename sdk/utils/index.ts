import { useRocketStore } from "../services/store";

export const filterArray = (array: any[]) => {
  if (!array || array.length === 0 || array == undefined) return [];
  return array?.filter((value: any, index: any, self: string | any[]) => {
    return self.indexOf(value) === index;
  });
};
interface ParamsObject {
  data: any;
  status: number | any;
  error: any;
  setData: (data: any) => void;
  clearData: () => void;
}

export const processDataStatus = ({
  data,
  status,
  error,
  setData,
  clearData,
}: any): void => {
  if (status === 200 && data) {
    setData(data);
  } else {
    clearData();
    console.error('Error:', error);
  }
};

export const useLoadingState = () => {

  let loading = false;

  const withLoading = async (callback: any, ...args: any) => {

    try {
      
      loading = true;

      const result = await callback(...args);

      loading = false;

      return result;

    } catch (error) {

      loading = false;

      throw error;
    };
  };

  const getLoading = () => loading;

  return { withLoading, getLoading };

}