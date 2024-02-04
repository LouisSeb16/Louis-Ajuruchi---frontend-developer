export const filterArray = (array: any[] | undefined) => {
    if (!array || array.length === 0 || array == undefined) return [];
    return array?.filter((value: any, index: any, self: string | any[]) => {
        return self.indexOf(value) === index;
    });
}