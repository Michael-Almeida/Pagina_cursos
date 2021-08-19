<template>
  <section class="produtos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Produtos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Qual curso Busca?" v-model="search" />
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4"
          v-for="event in eventsFiltered"
          :key="event.title"
        >
          <Card
            :title="event.title"
            :description="event.description"
            :image="event.image"
            :valor="event.valor"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Produtos",
  components: {
    Card,
  },
  data: function() {
    return {
      search: "",
      events: [
        {
          id: 1,
          title: "JavaScript básico",

          valor: "R$: 89,90",
          image: require("../assets/javaScript.jpg"),
        },
        {
          id: 2,
          title: "Front-End completo",

          valor: "R$: 150,00",
          image: require("../assets/front.jpg"),
        },
        {
          id: 3,
          title: "Java básico",

          valor: "R$: 100,00",
          image: require("../assets/java.jpg"),
        },
        {
          id: 4,
          title: "Criando primeiro projeto em Vue.js",

          valor: `R$: 95,00`,
          image: require("../assets/vue.jpg"),
        },
        {
          id: 5,
          title: "Do básico ao avançado - Spring Boot",
          valor: `R$: 75,90`,
          image: require("../assets/spring.jpg"),
        },
        {
          id: 6,
          title: "Banco de Dados avançado",
          valor: `R$: 180,00`,
          image: require("../assets/banco_dados.jpg"),
        },
        {
          id: 7,
          title: "Introdução a redes",
          valor: "R$: 50,00",
          image: require("../assets/redes.jpg"),
        },
        {
          id: 8,
          title: "Metodologia Ágil",
          valor: "R$: 10,00",
          image: require("../assets/agilite.jpg"),
        },
        {
          id: 9,
          title: "Introdução ao Linux",
          valor: "R$: 10,00",
          image: require("../assets/linux.png"),
        },
      ],
    };
  },
  computed: {
    eventsFiltered: function() {
      return this.events.filter((event) => {
        return (
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    },
  },
};
</script>

<style>
.produtos {
  padding: 56px 0px;
  background-color: #e2e2e2;

}

.produtos .row {
  align-items: flex-start;
}

.produtos .produtos__title {
  font-size: 36px;
  padding: 0;
  margin: 0;
}

.produtos input {
  border-radius: 50px;
  background-color: #f1f1f1;
  border: none;
  width: 70%;
  height: 30px;
  padding: 4px 14px;
  float: right;

}
</style>
