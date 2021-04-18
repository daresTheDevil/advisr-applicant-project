<template>
  <router-link :to="{ name: 'business', params: { id: business.id } }">
    <div class="block px-4 py-4 bg-white hover:bg-gray-50">
      <span class="flex items-center space-x-4">
        <span class="flex-1 flex space-x-2 truncate">
          <span class="flex flex-col text-gray-500 text-sm truncate">
            <span
              class="truncate text-gray-900 font-medium"
              v-html="highlight()"
            ></span>
            <span class="truncate"
              ><span class="text-gray-900 font-medium">{{
                convertToCurrency(business.average_campaign_budget)
              }}</span>
              average</span
            >
            <span class="truncate"
              ><span class="text-gray-900 font-medium">{{
                business.number_of_campaigns
              }}</span>
              campaigns</span
            >
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
  </router-link>
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
    convertToCurrency(number) {
      console.log("number => ", number);
      return number.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    },
    // highlight function takes search query and runs a regex replace for the business
    // name and replaces the 'matched' text with highlighted text...use <mark></mark>
    // to just make it yellow
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
};
</script>