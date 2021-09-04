<template>
  <div>
    <div class="row justify-between items-center q-mb-md">
      <div>
        <p class="text-h6 q-mb-none">Products</p>
        <span>{{ products.length }} entries found</span>
      </div>
      <div>
        <q-btn
          dense
          ripple
          color="primary"
          label="Add New Product"
          icon="add"
          size="12px"
          @click="onClick"
        />
      </div>
    </div>
    <q-table
      :columns="columns"
      :rows="products"
      :loading="isFetching"
      color="primary"
      row-key="_id"
    >
      <template #body-cell-createdAt="props">
        <q-td :props="props">
          <span class="text-black">
            {{ $filter.dateFormat(props.value) }}
          </span>
        </q-td>
      </template>
    </q-table>
  </div>
</template>
<script>
import { onMounted, computed, inject } from 'vue'
import { useEnhancer } from '@/enhancer'
import { Modules, getNamespace } from '@/store'
import { ProductModuleActions } from '@/store/products'
import { GLOBAL_FILTER } from '@/config/app.config'

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
    const $filter = inject(GLOBAL_FILTER)
    const { store, router } = useEnhancer()
    const products = computed(() => store.state.product.list.data)
    const isFetching = computed(() => store.state.product.list.fetching)

    const fetchProducts = (params = {}) => {
      return store.dispatch(
        getNamespace(Modules.Product, ProductModuleActions.FetchList),
        params
      )
    }

    const onClick = () => {
      router.push('/products/create')
    }

    onMounted(() => {
      fetchProducts()
    })

    return {
      products,
      columns,
      isFetching,
      $filter,
      onClick
    }
  }
}
</script>
