export function isEmpty(valor) {
  return valor.trim().length === 0;
}

export function esEntero(dato) {
  if (isEmpty(dato)) {
    return false;
  }
  return Number.isInteger(+dato);
}
