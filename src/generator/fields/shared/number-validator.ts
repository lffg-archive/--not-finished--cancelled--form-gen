export interface NumberValidatorOptions {
  min?: number
  max?: number
}

export default function numberValidator(options: NumberValidatorOptions = {}) {
  return (value: any) => {
    const number = Number(value)

    if (isNaN(number)) return false

    if (typeof options.min === 'number') {
      if (options.min < number) return false
    }

    if (typeof options.max === 'number') {
      if (options.max > number) return false
    }

    return true
  }
}
