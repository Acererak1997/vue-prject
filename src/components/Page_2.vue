<template>
  <div>
    <h1>以下の質問にお答えください</h1>
    <p>現在、生命保険に加入されていますか？</p>
    <form @change="second()">
      <input name="question" type="radio" />はい
      <input name="question" type="radio" />いいえ
    </form>

    <div v-if="secondQuestion">
      <p>現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <form @change="third()">
        <input name="question" type="radio" />はい
        <input name="question" type="radio" />いいえ
      </form>
    </div>

    <div v-if="thirdQuestion">
      <p>過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７ヶ月の入院をしたことがありますか？</p>
      <form>
        <input name="question" type="radio" />はい
        <input name="question" type="radio" />いいえ
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
  methods: {
    second: function() {
      if (this.secondQuestion === false) {
        this.secondQuestion = true;
      }
      this.secondQuestion === true;
      return;
    },
    third: function() {
      if (this.thirdQuestion === false) {
        this.thirdQuestion = true;
      }
      this.thirdQuestion === true;
      return;
    }
  }
};
</script>