<!--
  /components/Business.vue

  - 2 column main container that hides the right column on small breakpoints
  - 3 column grid in first column that wraps the map below the business
    header and campaigns list on small breakpoints
  
-->

<template>
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- main content -->
    <div class="flex-1 flex items-stretch overflow-hidden">
      <main class="flex-1 overflow-y-auto">
        <!-- Primary column -->
        <div class="max-w-3xl py-4 px-4 lg:max-w-7xl">
          <h1 class="sr-only">Business</h1>
          <!-- Main 3 column grid -->
          <div
            class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8"
          >
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
              <!-- Business panel -->
              <section aria-labelledby="section-overview-title">
                <div  v-if="loading == false" class="rounded-lg bg-white overflow-hidden shadow">
                  <h2 class="sr-only" id="section-overview-title">
                    {{ business.name }} overview
                  </h2>
                  <div class="bg-white px-6 py-3">
                    <div class="lg:flex lg:items-center lg:justify-between">
                      <div class="flex-1 min-w-0">
                        <h2
                          class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate"
                        >
                          {{ business.name }}
                        </h2>
                        <!-- meta list for business details...stacks on mobile -->
                        <div
                          class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6"
                        >
                          <div
                            class="mt-2 flex items-center text-sm text-gray-500"
                          >
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                              ></path>
                            </svg>

                            {{ business.category }}
                          </div>
                          <div
                            class="mt-2 flex items-center text-sm text-gray-500"
                          >
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                              ></path>
                            </svg>

                            {{ business.number_of_campaigns }}
                          </div>
                          <div
                            class="mt-2 flex items-center text-sm text-gray-500"
                          >
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                            <span>{{
                              convertToCurrency(
                                business.average_campaign_budget
                              )
                            }}</span>
                          </div>
                        </div>
                      </div>
                      <div class="mt-5 flex lg:mt-0 lg:ml-4">
                        <span class="">
                          <button
                            type="button"
                            class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Create Campaign
                            <svg
                              class="-mr-1 ml-2 w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                              ></path>
                            </svg>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- campaigns component -->
              <section v-if="loading == false">
                <Campaigns
                  :campaigns="business.campaigns"
                  :campaign_count="business.number_of_campaigns"
                />
              </section>
            </div>

            <!-- Right column -->
            <div class="grid grid-cols-1 gap-4">
              <!-- Leaflet map -->
              <section>
                <div class="rounded-lg bg-white overflow-hidden shadow">
                  <div class="w-full h-72">
                    <!-- lelaflet map object with tile-layer and marker at business location -->
                    <l-map
                      v-if="fetched"
                      :zoom="zoom"
                      :center="business.location"
                      :options="mapOptions"
                      class="h-full w-full"
                    >
                      <l-tile-layer :url="url" />
                      <l-marker :lat-lng="business.location"></l-marker>
                    </l-map>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <!-- Secondary column (hidden on smaller screens) -->
      <aside
        class="hidden w-96 bg-white border-l border-gray-200 overflow-y-auto lg:block"
      >
        <!-- Right column great place for a quick look or something -->
      </aside>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Campaigns from "./Campaigns.vue";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import { latLng } from "leaflet";

export default {
  components: {
    Campaigns,
    LMap,
    LTileLayer,
    LMarker,
  },
  mounted() {
    this.fetchBusinesses();
  },
  computed: {
    businessLocation() {
      return latLng(this.business.location.lat, this.business.location.lng);
    },
    averageSpend() {
      console.log("average", this.business.average);
      return this.business.average.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
  methods: {
    convertToCurrency(number) {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    async fetchBusinesses() {
      try {
        this.fetched = false;
        this.error = null;
        this.loading = true;
        const url = this.source;
        const response = await axios.get(url);
        this.business = response.data;
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
      this.fetched = true;
    },
  },
  data() {
    return {
      fetched: false,
      showmap: false,
      zoom: 13,
      loading: true,
      center: latLng(47.41322, -1.219482),
      mapOptions: {
        zoomSnap: 0.5,
        attributionControl: false,
      },
      url:
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      business: [],
      source: "http://localhost:3001/business/" + this.$route.params.id,
    };
  },
};
</script>