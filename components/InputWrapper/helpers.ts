export function removeNonDigitsCharsFromString(chars: string) {
  return chars.replace(/[^\d\.]/g, "")
}

export function convertNumberToStringDecimal(value: number, decimalsAmout = 2): string {
  return value.toFixed(decimalsAmout)
}

export function convertToPaceOrSpeed(value: number): number {
  return value > 0
    ? (60 / value)
    : 0
}