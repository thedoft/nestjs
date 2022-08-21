export const notFoundExceptionMessage = (
  entity: any,
  fieldValue: string | number,
  fieldName = 'id',
): string => {
  return `${entity.name} with ${fieldName} ${fieldValue} not found`;
};
