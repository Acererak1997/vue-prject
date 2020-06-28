<template>
  <div>
    <h1>以下の内容をご確認ください</h1>
    <p>-性別-</p>
    <p>{{ this.$store.state.gender }}</p>
    <p>-生年月日-</p>
    <p>{{ this.$store.state.year }}<span>年</span>{{ this.$store.state.month }}<span>月</span>{{ this.$store.state.day }}<span>日</span></p>
    <p>-現在、生命保険に加入されていますか？-</p>
    <p>{{ this.$store.state.firstQ }}</p>
    <p>-現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
    <p>{{ this.$store.state.secondQ }}</p>
    <p>-過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７ヶ月の入院をしたことがありますか？-</p>
    <p>{{ this.$store.state.thirdQ }}</p>
    <p>-ご相談内容-</p>
    <p>『{{ this.$store.state.consultationTxt }}』</p>
    <p>
      <router-link to="/page3">＜ 前へ戻る</router-link>
      <router-link to="#">次へ進む ></router-link>
    </p>
  </div>
</template>