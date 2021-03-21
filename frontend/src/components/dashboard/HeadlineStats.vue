<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Initial Investment</h3>
      </header>
      <div class="mt-3 text-center">{{ initialInvestment }}</div>
    </div>
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Account Established</h3>
      </header>
      <div class="mt-3 text-center">{{ establishedDate }}</div>
    </div>
    <div class="p-6 shadow overflow-hidden bg-white border-gray-200 sm:rounded-lg">
      <header>
        <h3 class="text-xl font-semibold">Projected Value</h3>
      </header>
      <div class="mt-3 text-center">{{ projectedValue }}</div>
    </div>    
  </div>
</template>

<script>

// Helper method for computed values
function isUndefined(val) {
  return typeof(val) == 'undefined'
}

export default {
  name: "HeadlineStats",
  props: ['initialInvestmentCents', 'accountEstablishedDate', 'interestRate'],
  computed: {
    initialInvestment() {
      if (isUndefined(this.initialInvestmentCents))
        return '-'
      const dollars = this.initialInvestmentCents / 100
      return `$${dollars.toLocaleString()} USD`
    },
    establishedDate() {
      if (isUndefined(this.accountEstablishedDate))
        return '-'
      const date = new Date(this.accountEstablishedDate)
      return date.toDateString()
    },
    projectedValue() {
      if (isUndefined(this.interestRate) || isUndefined(this.accountEstablishedDate) || isUndefined(this.interestRate))
        return '-'
      const P = this.initialInvestmentCents / 100
      const r = this.interestRate / 100
      // compounded once per month
      const n = 12
      const diff = new Date() - new Date(this.accountEstablishedDate)
      const diffInYears = Math.ceil(diff / (1000 * 60 * 60 * 24 * 365.25))
      const A = P * ((1 + (r / n)) ** (n * diffInYears))
      return `$${A.toLocaleString()} USD`
    }
  }
}
</script>

