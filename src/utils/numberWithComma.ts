export function numberWithComma(numberValue: number): string {
  return numberValue.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
