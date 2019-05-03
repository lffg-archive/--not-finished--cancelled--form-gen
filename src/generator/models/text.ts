import { BaseField } from '../../types/generator-fields-types'

const textFieldAttributes  = 

const textField: BaseField = {
  uiName: 'Campo de Texto',
  uiDesc: 'Campo que aceita um texto genérico.',
  uiRefs: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text'
  ],

  attributes: [],

  /**
   * Resolves the field into HTML.
   */
  templateResolver: (field, attributes) => {
    return ''
  }
}
