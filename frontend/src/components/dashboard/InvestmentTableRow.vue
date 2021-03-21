<template>
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="flex items-center">
        <div class="flex-shrink-0 h-10 w-10">
          <img
            class="h-10 w-10 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
            alt=""
          />
        </div>
        <div class="ml-4">
          <div class="text-sm font-medium text-gray-900">{{ userName }}</div>
          <div class="text-sm text-gray-500">{{ userEmail }}</div>
        </div>
      </div>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-gray-900">{{ description }}</div>
      <!-- <div class="text-sm text-gray-500">Check</div> -->
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span
        class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
      >
        Credited
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ amount }}</td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ amount }}</td>
  </tr>
</template>

<script>
export default {
  name: "InvestmentTableRow",
  props: ["transaction"],
  computed: {
    userName() {
      if (typeof this.transaction == 'undefined')
        return '-'
      return this.transaction.user.name
    },
    userEmail() {
      if (typeof this.transaction == 'undefined')
        return '-'
      return this.transaction.user.email
    },
    description() {
      if (typeof this.transaction == 'undefined')
        return '-'
      return this.transaction.description
    },
    amount() {
      if (typeof this.transaction == 'undefined')
        return '-'
      return `$${this.transaction.amount.toLocaleString()}`
    },
  },
};
</script>