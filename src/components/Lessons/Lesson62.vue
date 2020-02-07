
<template>
  <div id="app-62" class="lesson">
    <h2>Bitcoin Price</h2>
    <section v-if="hasError">Error</section>
    <section v-else>
      <ul v-cloak>
        <li
          v-for="(rate,currency) in bpi"
          :key="currency"
        >{{ currency }} : {{ rate.rate_float | currencyDecimal }}</li>
      </ul>
    </section>

    <button v-on:click="reload">再読込み</button>
    <!-- <button v-on:click="console">console.log()</button> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Lesson62',
  props: {
    commonSettings: Object,
    componentName: String
  },
  data () {
    return {
      hasError: false,
      bpi: null
    }
  },
  mounted: function () {
    this.reload()
  },
  methods: {
    console: function () {
      console.dir(this)
    },
    reload: function () {
      axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then(function (response) {
        this.bpi = response.data.bpi
      }.bind(this)).catch(function (error) {
        console.log(error)
        this.hasError = true
      }.bind(this))
    }
  },
  filters: {
    currencyDecimal (value) {
      return value.toFixed(2)
    }
  }
}

</script>

<style>

[v-cloak]{
  display: none;
}

</style>
