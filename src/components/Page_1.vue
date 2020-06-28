<template>
  <div>
    <h1>お客様の情報を入力してください</h1>
    <p>性別</p>
    <form>
      <input type="radio" value="男性" name="gender" @input="getGender" />男性
      <input type="radio" value="女性" name="gender" @input="getGender" />女性
    </form>
    <p>生年月日</p>
    <p>
      <select name="year" @change="getYear">
        <option v-for="n in 99" :value="n + 1922" :key="n">{{ n +1922 }}（ {{ getWareki(n)}} ）</option>
      </select>
      年
      <select @change="getMonth">
        <option v-for="n in 12" :key="n">{{ n }}</option>
      </select>
      月
      <select @change="getDay">
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
      daysMax: ""
    };
  },
  computed: {
    gender() {
      return this.$store.state.gender;
    },
    year() {
      return this.$store.state.year;
    },
    month() {
      return this.$store.state.month;
    },
    day() {
      return this.$store.state.day;
    }
  },
  created: function() {
    this.getDateFormat();
  },
  methods: {
    getGender(e) {
      this.$store.dispatch("getGender", e.target.value);
    },
    getDateFormat: function() {
      this.daysMax = new Date(this.$store.state.year, this.month, 0).getDate();
    },
    getWareki: function(n) {
      if (n > 96) {
        return `令和${n - 96}年`;
      }
      if (n > 66) {
        return `平成${n - 66}年`;
      }
      if (n > 3) {
        return `昭和${n - 3}年`;
      }
      if (n > 0) {
        return `大正${12 + n}年`;
      }
      // switch (n) {
      //   case n > 96:
      //     `令和${n - 96}年`;
      //     break;
      //   case n > 66:
      //     `平成${n - 66}年`;
      //     break;
      //   case n > 3:
      //     `昭和${n - 63}年`;
      //     break;
      //   case n > 0:
      //     `大正${12 + n}年`;
      //     break;
      // }
    },
    getYear(e) {
      this.$store.dispatch("getYear", e.target.value);
    },
    getMonth(e) {
      this.$store.dispatch("getMonth", e.target.value);
    },
    getDay(e) {
      this.$store.dispatch("getDay", e.target.value);
    }
  }
};
</script>