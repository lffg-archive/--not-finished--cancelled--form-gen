export default function strictValidator(defaultValue: any) {
  return (userValue: any) => defaultValue === userValue
}
