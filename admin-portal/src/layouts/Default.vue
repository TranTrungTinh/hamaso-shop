<template>
  <q-layout
    view="hHh lpR fFf"
    class="bg-grey-1"
  >
    <q-header
      bordered
      class="bg-white text-grey-8"
      height-hint="64"
    >
      <q-toolbar
        flat
        class=" text-black"
      >
        <q-btn
          flat
          dense
          round
          aria-label="Menu"
          icon="menu"
          class="q-mr-sm"
          @click="toggleLeftDrawer"
        />
        <q-separator
          dark
          vertical
          inset
        /> 
        <q-toolbar-title>
          ADMIN PORTAL
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <div>{{ email }}</div>
          <q-btn
            round
            flat
          >
            <q-avatar
              color="primary"
              text-color="white"
              size="30px"
            >
              T
            </q-avatar>
            <q-menu>
              <q-list style="min-width: 200px">
                <q-item
                  clickable
                  @click="showDialog"
                >
                  <q-item-section side>
                    <q-icon name="logout" />
                  </q-item-section>
                  <q-item-section>Sign out</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      class="text-black column"
      :width="280"
    >
      <q-list>
        <q-item
          v-for="item in routes"
          :key="item.name"
          v-ripple
          active-class="bg-teal-1 text-grey-8"
          :to="item.redirect"
          class="text-black bg-grey-3"
          clickable
        >
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" />
          </q-item-section>
          <q-item-section>{{ item.meta.title }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-dialog
      v-model="confirm"
      persistent
    >
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar
            icon="logout"
            color="primary"
            text-color="white"
          />
          <span class="q-ml-sm">Are you sure you want to sign out?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            flat
            dense
            no-caps
            label="Cancel"
            color="negative"
          />
          <q-btn
            v-close-popup
            dense
            no-caps
            label="Confirm"
            color="primary"
            @click="signOut"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <q-page-container>
      <div class="q-pa-md">
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
// import { useStore } from 'vuex'
export default {
  setup () {
    // states
    const router = useRouter()
    const name = router?.options?.routes?.[0]?.children?.[0]?.name
    // const store = useStore()
    const confirm = ref(false)
    const menuItemActived = ref(name)
    const leftDrawerOpen = ref(false)

    // computed
    const email = computed(() => {
      return ''
    })
    const routes = computed(() => {
      return router.options.routes[0].children || []
    })

    // methods
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    const signOut = async () => {
    }

    function showDialog() {
      confirm.value = true;
    }

    return {
      // states
      menuItemActived,
      leftDrawerOpen,
      confirm,

      // computed
      routes,
      email,

      // methods
      toggleLeftDrawer,
      signOut,
      showDialog
    }

  }
}
</script>
