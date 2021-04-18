<template>
  <header class="w-full">
    <div
      class="relative z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex"
    >
      <div class="flex-1 flex justify-between px-4">
        <div class="flex-1 flex items-center">
          <div class="max-w-lg w-full lg:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
              >
                <svg
                  class="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <input
                id="search"
                autocomplete="none"
                name="search"
                class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search"
                type="text"
                v-model="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main content -->
  <div class="flex-1 flex items-stretch overflow-hidden">
    <main class="flex-1 overflow-y-auto">
      <!-- Primary column -->
      <section
        aria-labelledby="primary-heading"
        class="min-w-0 flex-1 h-full flex flex-col overflow-hidden lg:order-last"
      >
        <h1 id="primary-heading" class="sr-only">Businesses</h1>
        <div class="mt-4 sm:hidden">
          <div class="px-4 sm:px-6">
            <h2
              class="text-gray-500 text-xs font-medium uppercase tracking-wide"
            >
              Businesses
            </h2>
          </div>
          <ul class="mt-3 border-t border-gray-200 divide-y divide-gray-100">
            <template v-if="sortedBusinesses.length">
              <li v-for="entity in sortedBusinesses" :key="entity.id">
                <BusinessCard :business="entity" :search="search" />
              </li>
            </template>
            <template v-else>
              <div class="block px-4 py-4 bg-white hover:bg-gray-50">
                <span class="flex items-center space-x-4">
                  <span class="flex-1 flex space-x-2 truncate">
                    <span class="flex flex-col text-gray-500 text-sm truncate">
                      <span class="truncate text-gray-900 font-medium"
                        >No businesses match your search</span
                      >
                    </span>
                  </span>
                </span>
              </div>
            </template>
          </ul>
        </div>
        <div class="hidden sm:block">
          <div
            class="align-middle inline-block min-w-full border-b border-gray-200"
          >
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    @click="sort(['name'])"
                  >
                    <div class="flex items-center space-x-2 cursor-pointer">
                      <span>Business Name</span>
                      <template v-if="currentSort.join('') === 'name'">
                        <svg
                          :class="{
                            'rotate-180': currentSortDir === 'desc',
                          }"
                          class="w-4 h-4 transform duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </template>
                      <template v-else>
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </template>
                    </div>
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    @click="sort(['category'])"
                  >
                    <div class="flex items-center space-x-2 cursor-pointer">
                      <span>Category</span>
                      <template v-if="currentSort.join('') === 'category'">
                        <svg
                          :class="{
                            'rotate-180': currentSortDir === 'desc',
                          }"
                          class="w-4 h-4 transform duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </template>
                      <template v-else>
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </template>
                    </div>
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    @click="sort(['number_of_campaigns'])"
                  >
                    <div
                      class="flex items-center justify-end space-x-2 cursor-pointer"
                    >
                      <span>Number of Campaigns</span>
                      <template
                        v-if="currentSort.join('') === 'number_of_campaigns'"
                      >
                        <svg
                          :class="{
                            'rotate-180': currentSortDir === 'desc',
                          }"
                          class="w-4 h-4 transform duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </template>
                      <template v-else>
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </template>
                    </div>
                  </th>
                  <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    @click="sort(['average_campaign_budget'])"
                  >
                    <div
                      class="flex items-center justify-end space-x-2 cursor-pointer"
                    >
                      <span>Average Campaign Budget</span>
                      <template
                        v-if="
                          currentSort.join('') === 'average_campaign_budget'
                        "
                      >
                        <svg
                          :class="{
                            'rotate-180': currentSortDir === 'desc',
                          }"
                          class="w-4 h-4 transform duration-150"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5 15l7-7 7 7"
                          ></path>
                        </svg>
                      </template>
                      <template v-else>
                        <svg
                          class="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M20 12H4"
                          ></path>
                        </svg>
                      </template>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-100">
                <template v-if="sortedBusinesses.length > 0">
                  <tr v-for="entity in sortedBusinesses" :key="entity.id">
                    <BusinessRow :business="entity" :search="search" />
                  </tr>
                </template>
                <template v-else>
                  <tr class="">
                    <td
                      colspan="5"
                      class="hidden md:table-cell px-6 whitespace-nowrap text-sm text-gray-500 text-left"
                    >
                      <div
                        class="bg-indigo-600 px-6 py-3 flex rounded-md items-center justify-between flex-wrap"
                      >
                        <div class="w-0 flex-1 flex items-center">
                          <span class="flex p-2 rounded-lg bg-indigo-800">
                            <!-- Heroicon name: outline/speakerphone -->
                            <svg
                              class="h-6 w-6 text-white"
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
                                d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                              />
                            </svg>
                          </span>
                          <p class="ml-3 font-medium text-white truncate">
                            <span>
                              We couldn't find any businesses that match your
                              search.
                            </span>
                          </p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
    <!-- Secondary column (hidden on smaller screens) -->
    <aside
      class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"
    >
      <!-- great place for quick-info or something like that -->
    </aside>
  </div>
</template>


<script>
import axios from "axios";
import SideNav from "./SideNav.vue";
import BusinessRow from "./BusinessRow.vue";
import BusinessCard from "./BusinessCard.vue";
import Navbar from "./Navbar.vue";
export default {
  props: {
    query: {
      type: String,
      default: () => "",
    },
  },
  components: {
    Navbar,
    BusinessCard,
    SideNav,
    BusinessRow,
  },
  data() {
    return {
      source: "http://localhost:3001/businesses",
      currentSort: ["name"],
      currentSortDir: "asc",
      search: "",
      businesses: [],
    };
  },
  computed: {
    filteredBusinesses() {
      if (this.search.length == 0) return this.businesses;
      return this.businesses.filter((business) => {
        return business.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
    sortedBusinesses() {
      return this.filteredBusinesses.sort((a, b) => {
        let modifier = 1;
        if (this.currentSortDir === "desc") modifier = -1;
        this.currentSort.forEach((x) => {
          a = a[x];
          b = b[x];
        });
        if (a < b) return -1 * modifier;
        if (a > b) return 1 * modifier;
        return 0;
      });
    },
  },
  methods: {
    sort(s) {
      if (s.join("") === this.currentSort.join("")) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    async fetchBusinesses() {
      try {
        this.error = null;
        this.loading = true;
        const url = this.source;
        const response = await axios.get(url);
        this.businesses = response.data;
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          };
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          };
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          };
        }
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchBusinesses();
  },
};
</script>