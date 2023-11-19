export const filterArray = (array: any[]) => {
    return array?.filter((value: any, index: any, self: string | any[]) => {
        return self.indexOf(value) === index;
    });
}