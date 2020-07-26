<template>
  <div>
    <h1>以下の質問にお答えください</h1>
    <p>現在、生命保険に加入されていますか？</p>
    <form @change="displaySecond()">
      <input name="question" type="radio" value="はい" @input="getFirstQ"/>はい
      <input name="question" type="radio" value="いいえ" @input="getFirstQ"/>いいえ
    </form>

    <div v-if="secondQuestion">
      <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <form @change="displayThird()">
        <input name="question" type="radio" value="はい" @input="getSecondQ" />はい
        <input name="question" type="radio" value="いいえ" @input="getSecondQ"/>いいえ
      </form>
    </div>

    <div v-if="thirdQuestion">
      <p>過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７ヶ月の入院をしたことがありますか？</p>
      <form>
        <input name="question" type="radio" value="はい" @input="getThirdQ"/>はい
        <input name="question" type="radio" value="いいえ" @input="getThirdQ"/>いいえ
      </form>
    </div>
      <router-link to="/">＜ 前へ戻る</router-link>
      <router-link to="/page3">次へ進む ></router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      secondQuestion: false,
      thirdQuestion: false
    };
  },
  computed: {
    firstQ(){
      return this.$store.getter.firstQ
    },
    secondQ(){
      return this.$store.getter.secondQ
    },
    thirdQ(){
      return this.$store.getter.thirdQ
    },
  },
  methods: {
    displaySecond: function() {
      if (this.secondQuestion === false) {
        this.secondQuestion = true;
      }
      return;
    },
    displayThird: function() {
      if (this.thirdQuestion === false) {
        this.thirdQuestion = true;
      }
      return;
    },
    getFirstQ(e) {
      this.$store.commit('getFirstQ', e.target.value)
    },
    getSecondQ(e) {
      this.$store.commit('getSecondQ', e.target.value)
    },
    getThirdQ(e) {
      this.$store.commit('getThirdQ', e.target.value)
    }
  }
};
</script>