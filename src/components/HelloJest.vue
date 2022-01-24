<template>
  <div>
    <h1>{{ fruits }}</h1>
    <h2>{{ capitalized }}</h2>
    <h2>{{ falseCapitalized }}</h2>
    <h2>{{ reversed }}</h2>
    <!-- <h3> {{addMsg(fruits)}}</h3> -->
    <h3> {{ moreTen }}</h3>
    <h2>{{ falseReversed }}</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloJest',
  
  data () {
    return {
      fruits: 'Fruits',
      moreTen: '안녕하세요?'
    }
  },

  // method: {
  //   addMsg (msg) {
  //     return [...msg.split(''), ...msg.split('').reverse()].join('')
  //   }
  // },

  computed: {
    capitalized () {
      return this.fruits.toUpperCase()
    },
    falseCapitalized () {
      return this.fruits.toLowerCase()
    },
    reversed () {
      return this.fruits.split('').reverse().join('')
    },
    falseReversed () {
      return this.fruits.split('').reverse().join('') + 'like'
    }
  }
}
</script>