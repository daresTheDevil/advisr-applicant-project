<template>
  <td
    class="px-6 py-3 max-w-0 w-1/3 whitespace-nowrap text-sm font-medium text-gray-900"
  >
    <router-link :to="{ name: 'business', params: { id: business.id } }">
      <div class="flex items-center space-x-2">
        <span v-html="highlight()"> </span>
        <svg
          class="w-4 text-gray-500 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          ></path>
        </svg>
      </div>
    </router-link>
  </td>

  <td
    class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-left"
  >
    {{ business.category }}
  </td>
  <td
    class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right"
  >
    {{ business.number_of_campaigns }}
  </td>
  <td
    class="hidden md:table-cell px-6 py-3 whitespace-nowrap text-sm text-gray-500 text-right"
  >
    {{
      business.average_campaign_budget.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })
    }}
  </td>
</template>

<script>
export default {
  props: {
    business: {
      type: Object,
      default: () => ({}),
    },
    search: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    highlight() {
      if (!this.search) {
        return this.business.name;
      }
      return this.business.name.replace(
        new RegExp(this.search, "gi"),
        (match) => {
          return '<span class="bg-blue-100 underline">' + match + "</span>";
        }
      );
    },
  },
  computed: {},
};
</script>