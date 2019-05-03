import { BaseField } from '../../types/generator-fields-types'
import strictValidator from './shared/strict-validator'

const textField: BaseField = {
  uiName: 'Campo de Texto',
  uiDesc: 'Campo que aceita um texto genérico.',
  uiRefs: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text'
  ],

  attributes: [
    {
      type: 'hidden',
      htmlName: 'type',
      defaultValue: 'text',
      validators: [strictValidator('text')]
    },
    {
      type: 'text',
      uiName: 'Comprimento Máximo',
      uiDesc: 'Determina o comprimento máximo do texto a ser inserido.',
      uiRefs: [
        'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text#maxlength'
      ],
      htmlName: 'maxlength',
      htmlAttributes: {
        type: 'number',
        min: 0
      }
    }
  ],

  /**
   * Resolves the field into HTML.
   */
  templateResolver: (field, attributes) => {
    return ''
  }
}

export default textField
