<template>
  <h2
    class="max-w-6xl mx-auto mt-2 text-lg leading-6 font-medium text-gray-900"
  >
    Campaigns
  </h2>
  <!-- small screen sizes -->
  <div class="shadow sm:hidden">
    <ul
      class="mt-2 divide-y divide-gray-200 overflow-hidden shadow rounded-md sm:hidden"
    >
      <template v-if="campaigns.length > 0">
        <li v-for="campaign in campaigns" :key="campaign.id">
          <div class="block px-4 py-4 bg-white hover:bg-gray-50">
            <span class="flex items-center space-x-4">
              <span class="flex-1 flex space-x-2 truncate">
                <span class="flex flex-col text-gray-500 text-sm truncate">
                  <span class="truncate">{{ campaign.name }}</span>
                  <span class="text-gray-900 font-medium">{{
                    convertToCurrency(campaign.budget)
                  }}</span>
                </span>
              </span>
              <svg
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </div>
        </li>
      </template>
      <template v-else>
        <li>
          <div class="block px-4 py-4 bg-white hover:bg-gray-50">
            <span class="flex items-center space-x-4">
              <span class="flex-1 flex space-x-2 truncate">
                <span class="flex flex-col text-gray-500 text-sm truncate">
                  <span class="truncate">No current campaigns</span>
                </span>
              </span>
            </span>
          </div>
        </li>
      </template>
    </ul>
  </div>
  <div class="hidden sm:block">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col mt-2">
        <div
          class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th
                  class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Budget
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <template v-if="campaigns.length > 0">
                <tr
                  v-for="campaign in campaigns"
                  :key="campaign.id"
                  class="bg-white"
                >
                  <td
                    class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    <p class="text-gray-500 truncate group-hover:text-gray-900">
                      {{ campaign.name }}
                    </p>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span class="text-gray-900 font-medium"
                      >{{ convertToCurrency(campaign.budget) }}
                    </span>
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr class="bg-white">
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    colspan="2"
                  >
                    No current campaigns
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    campaigns: {
      type: Array,
      default: () => ({}),
    },
    campaign_count: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    convertToCurrency(number) {
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
  },
};
</script>