import hamaso from '@/services/hamaso'

export const PRODUCTS_API_PATH = '/products'

export const ProductModuleListMutations = {
  // list
  SetListData: 'setListData',
  SetMoreListData: 'setMoreListData',
  SetListFetching: 'setListFetching',
  // detail
  SetDetailData: 'setDetailData',
  SetDetailFetching: 'setDetailFetching'
}

export const ProductModuleActions = {
  FetchList: 'fetchList',
  FetchDetail: 'fetchDetail',
  PostProduct: 'postProduct'
}

const getDefaultListData = () => ({
  data: [],
  fetching: false,
  pagination: null
})

const state = () => ({
  list: getDefaultListData(),
  detail: {
    fetching: false,
    data: null
  }
})

const mutations = {
  [ProductModuleListMutations.SetListFetching](state, fetching) {
    state.list.fetching = fetching
  },
  [ProductModuleListMutations.SetListData](state, articleData) {
    state.list.data = articleData
  },
  [ProductModuleListMutations.SetMoreListData](state, articleData) {
    state.list.data.data.push(...articleData.data)
    state.list.data.pagination = articleData.pagination
  },

  [ProductModuleListMutations.SetDetailFetching](state, fetching) {
    state.detail.fetching = fetching
  },
  [ProductModuleListMutations.SetDetailData](state, article) {
    state.detail.data = article
  }
}

const actions = {
  [ProductModuleActions.FetchList]({ commit }, params = {}) {
    commit(ProductModuleListMutations.SetListFetching, true)

    return hamaso
      .get(PRODUCTS_API_PATH, { params })
      .then(products => {
        commit(ProductModuleListMutations.SetListData, products)
        return products
      })
      .finally(() => {
        commit(ProductModuleListMutations.SetListFetching, false)
      })
  },

  [ProductModuleActions.FetchDetail]({ commit }, params) {
    commit(ProductModuleListMutations.SetDetailFetching, true)
    commit(ProductModuleListMutations.SetDetailData, null)
    return nodepress
      .get(`${PRODUCTS_API_PATH}/${params.productId}`)
      .then(productDetail => {
        return new Promise(resolve => {
          fetchDelay(params.delay || 0)(() => {
            commit(ProductModuleListMutations.SetDetailData, productDetail)
            resolve(productDetail)
          })
        })
      })
      .finally(() => {
        commit(ProductModuleListMutations.SetDetailFetching, false)
      })
  }
}

const productModule = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default productModule
 