<template>
  <div class="app">
    <Header></Header>
    <App-Main></App-Main>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Header from "@/component/common/Header.vue";
import AppMain from "@/component/common/AppMain.vue";
import Footer from "@/component/common/Footer.vue";
export default {
  components: {
    Header,
    Footer,
    AppMain
  },
  data() {
    return {};
  }
};
</script>

