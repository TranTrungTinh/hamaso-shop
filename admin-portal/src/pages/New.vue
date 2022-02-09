<template>
  <vue-form-json-schema
    :model-value="model"
    :schema="schema"
    :ui-schema="uiSchema"
  />
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  setup() {
    const model = reactive({})
    const schema = reactive({
      type: 'object',
      required: ['name', 'age'],
      properties: {
        name: {
          type: 'string',
        },
        age: {
          type: 'number',
          minimum: 18
        },
      },
    })

    const uiSchema = computed(() => [{
      component: "div",
      fieldOptions: {
        class: ['row']
      },
      children: [{
        component: "q-input",
        model: "name",
        fieldOptions: {
          class: ['col-6'],
          props: {
            filled: true,
            label: 'Your name *',
            hint: 'Name and surname',
            'lazy-rules': true,
            rules: [val => val && val.length > 0 || 'Please type something']
          }
        }
      }, {
        component: "q-input",
        model: "age",
        fieldOptions: {
          class: ['col-6'],
          props: {
            filled: true,
            label: 'Your age *',
            'lazy-rules': true,
            rules: [
              val => val !== null && val !== '' || 'Please type your age',
              val => val > 0 && val < 100 || 'Please type a real age'
            ]
          }
        }
      }]
    }])

    return {
      model,
      schema,
      uiSchema
    }
  }
}
</script>
