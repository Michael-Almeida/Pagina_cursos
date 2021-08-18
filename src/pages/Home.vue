<template>
  <div id="home">
    <Header />
    <Produtos />
    <Flooter />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Produtos from "../components/Produtos.vue";
import Flooter from "../components/Flooter.vue"
export default {
  name: "Home",
  components: {
    Header,
    Produtos,
    Flooter,
  },
};
</script>
