<template>
  <div class="h-screen bg-gray-50 flex overflow-hidden">
    <!-- Narrow sidebar -->
    <SideNav />
    <div class="flex-1 flex flex-col overflow-hidden">
      <Navbar @handleSearch="handleSearch" />
      <span v-html="search"></span>

      <router-view />
    </div>
  </div>
</template>



<script>
import SideNav from "./components/SideNav.vue";
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      search: '',
    }
  },
  components: {
    SideNav,
    Navbar,
  },
  methods: {
    handleSearch(s) {
      this.search = s
    }
  }
}
</script>