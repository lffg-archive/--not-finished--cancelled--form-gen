export type FieldAttributeValidators = ((value: string) => boolean | 'ignore')[]

export interface HiddenFieldAttribute {
  type: 'hidden'
  htmlName: string
  defaultValue: string
  validators?: FieldAttributeValidators
}

export interface CheckboxFieldAttribute {
  uiName: string
  uiDesc: string
  uiRefs?: string[]
  type: 'checkbox'
  htmlName: string
  defaultValue: boolean
  validators?: FieldAttributeValidators
}

export interface GenericFieldAttribute {
  type: 'static' | 'text'
  uiName: string
  uiDesc: string
  uiRefs?: string[]
  htmlName: string
  htmlAttributes?: { key: string; value: string }[]
  defaultValue: string
  validators?: FieldAttributeValidators
}

export type FieldAttribute =
  | HiddenFieldAttribute
  | CheckboxFieldAttribute
  | GenericFieldAttribute

export interface ResolvedAttributes {
  meta: FieldAttribute
  value: string | boolean
  defaultValue: string | boolean
}

export interface BaseField {
  uiName: string
  uiDesc?: string
  uiRefs?: string[]
  attributes?: FieldAttribute[]
  valueConfig?: any
  templateResolver: (
    field: BaseField,
    attributes: ResolvedAttributes[]
  ) => string
}
