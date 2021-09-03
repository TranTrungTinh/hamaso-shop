<template>
  <div>
    <q-table
      title="Products"
      :columns="columns"
      :rows="products"
      :loading="isFetching"
      color="primary"
      row-key="_id"
    />
  </div>
</template>
<script>
import { onMounted, computed } from 'vue'
import { useEnhancer } from '@/enhancer'
import { Modules, getNamespace } from '@/store'
import { ProductModuleActions } from '@/store/products'

const columns = [
  {
    name: 'title',
    required: true,
    label: 'Name',
    align: 'left',
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'status', label: 'Status', align: 'left', field: 'status' },
  { name: 'createdAt', label: 'CreatedAt', field: 'createdAt', sortable: true },
  { name: 'description', label: 'Description', align: 'left', field: 'description' },
]

export default {
  setup() {
   const { store } = useEnhancer()
    const products = computed(() => store.state.product.list.data)
    const isFetching = computed(() => store.state.product.list.fetching)

    const fetchProducts = (params = {}) => {
      return store.dispatch(
        getNamespace(Modules.Product, ProductModuleActions.FetchList),
        params
      )
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      products,
      columns,
      isFetching
    }
  }
}
</script>
