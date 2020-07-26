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
        <option v-for="n in 31" :key="n">{{ n }}</option>
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
      return this.$store.getter.gender;
    },
    year() {
      return this.$store.getter.year;
    },
    month() {
      return this.$store.getter.month;
    },
    day() {
      return this.$store.getter.day;
    }
  },
  methods: {
    getGender(e) {
      this.$store.commit('getGender', e.target.value);
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
    },
    getYear(e) {
      this.$store.commit('getYear', e.target.value);
    },
    getMonth(e) {
      this.$store.commit('getMonth', e.target.value);
    },
    getDay(e) {
      this.$store.commit('getDay', e.target.value);
    }
  }
};
</script>