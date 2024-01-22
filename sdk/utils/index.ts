export const filterArray = (array: any[]) => {
    return array?.filter((value: any, index: any, self: string | any[]) => {
        return self.indexOf(value) === index;
    });
}

const ITEMS_PER_PAGE = 3;

export const generateTotalPages = (items: any) => {
  const numberOfItems = items?.length;
  const totalPages = Math.ceil(numberOfItems / ITEMS_PER_PAGE);
  return totalPages;
}

export const streamlineItemsToDisplay = (currentPage: number, items: any) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const itemsToDisplay = items && items?.slice(offset, offset + ITEMS_PER_PAGE);
  return itemsToDisplay;
}

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};