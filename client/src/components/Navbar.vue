<template>
  <nav class="bg-white border-b">
    <div class="max-w-7xl px-2 sm:px-4">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex items-center px-2 lg:px-0">
          <div class="flex-shrink-0 block lg:hidden">
            <svg
              class="h-8 fill-current text-purple-800"
              viewBox="0 0 142 98"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill-rule="evenodd"
              clip-rule="evenodd"
              stroke-linejoin="round"
              stroke-miterlimit="2"
            >
              <path
                d="M32.028 0l55.646 97.771c69.205 2.487 75.409-98.87-2.311-97.791L32.028 0zM21.891 35.68L50.02 84.864l-40.413-.03c-9.45-.558-11.28-8.425-8.012-13.85L21.891 35.68z"
              />
            </svg>
          </div>
          <div class="hidden lg:block">
            <h1 class="text-2xl font-bold tracking-tight capitalize text-gray-700" v-html="$route.name">
            </h1>
          </div>
        </div>
        <div class="flex lg:hidden">
          <!-- Mobile menu button -->
          <button
            type="button"
            @click="mobile = ! mobile"
            class="inline-flex items-center justify-center p-2 rounded-md text-purple-800 hover:text-purple-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.
          -->
            <svg
              v-if="!mobile"
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <!--
            Icon when menu is open.
          -->
            <svg
              v-if="mobile"
              class="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-show="mobile" class="block" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <a
          href="#"
          class="bg-purple-800 text-white block px-3 py-2 rounded-md text-base font-medium"
          >Businesses</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      mobile: false,
    };
  },
};
</script>