import { createStore } from 'vuex'
import productModule from './products'

export const Modules = {
  Product: 'product'
}

export const createVuexStore = () => createStore({
  modules: {
    [Modules.Product]: productModule,
  }
})

export const getNamespace = (moduleName, target) => {
  return `${moduleName}/${target}`
}
 
 