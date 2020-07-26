<template>
  <div>
    <h1>ご相談内容をご記入ください</h1>
    <p>-ご相談内容-</p>
    <textarea cols="30" rows="30" @input="getTex"></textarea>
    <p>
      <router-link to="/page2">＜ 前へ戻る</router-link>
      <router-link to="/page4">次へ進む ></router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    gender(){
      return this.$store.getter.consultationTxt;
    }
  },
  methods: {
    getTex(e){
      this.$store.commit('getTxt', e.target.value)
    },
  }
}
</script>