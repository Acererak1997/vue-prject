<template>
  <div>
    <h1>お客様の情報を入力してください</h1>
    <p>性別</p>
    <form>
      <input type="radio" value="男性" name="sex" />男性
      <input type="radio" value="女性" name="sex" />女性
    </form>
    <p>生年月日</p>
    <p>
      <select v-model="year" @change="getDateFormat">
        <option v-for="n in 99" :key="n">{{ n + 1921 }}（ {{ getWareki(n)}} ）</option>
      </select>
      年
      <select v-model="month" @change="getDateFormat">
        <option v-for="n in 12" :key="n">{{ n }}</option>
      </select>
      月
      <select v-model="day">
        <option v-for="n in daysMax" :key="n">{{ n }}</option>
      </select>
      日
    </p>
    <router-link to="/page2">次へ進む ></router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: 2000,
      month: 1,
      day: 1,
      daysMax: ''
    };
  },
  created: function() {
    this.getDateFormat();
  },
  methods: {
    getDateFormat : function() {
      this.daysMax = new Date(this.year, this.month, 0).getDate();
    },
    getWareki: function(n) {
      if( n > 97 ) {
        return `令和${n - 97}年`;
      }
      if(n > 66) {
        return `平成${n - 66}年`;
      }
      if(n > 3) {
        return `昭和${n - 3}年`;
      }
      if(n > 0) {
        return `大正${12 + n}年`;
      }
      // switch (n) {
      //   case n > 97:
      //     `令和${n - 97}年`;
      //     break;
      //   case n > 66:
      //     `平成${n - 66}`;
      //     break;
      //   case n > 3:
      //     `昭和${n - 63}`;
      //     break;
      //   case n > 0:
      //     `大正${n - 0}`;
      //     break;
      // }
    }
  }
};
</script>