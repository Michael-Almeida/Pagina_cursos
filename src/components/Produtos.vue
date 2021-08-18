<template>
  <section class="produtos">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>Produtos</h2>
        </div>
        <div class="col-md-6">
          <input type="text" placeholder="Qual curso Busca?" v-model="search">
        </div>
      </div>
      <div class="row">
        <div class="col-md-4" v-for="event in eventsFiltered" :key="event.title">
          <Card :title="event.title" :description="event.description" :image="event.image"/>
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
    Card
  },
  data: function() {
    return {
      search: "",
      events: [
        {
          id: 1,
          title: "Show 10 anos",
          description: "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 2,
          title: "Show 20 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 3,
          title: "Show 30 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 4,
          title: "Show 40 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 5,
          title: "Show 50 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 6,
          title: "Show 30 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 7,
          title: "Show 30 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 8,
          title: "Show 30 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        },
        {
          id: 9,
          title: "Show 30 anos",
          description:
            "dummy text ever since the 1500s, when an unknown printer took a galley",
          valor: "R$: 10,00",
          image: require("../assets/capa.png")
        }
      ]
    };
  },
  computed: {
    eventsFiltered: function() {
      return this.events.filter(event => {
        return (
          event.title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      });
    }
  }
};
</script>

<style>
.produtos {
  padding: 56px 0px;
  background-color: #e2e2e2;
  width: 100%;
  height: 100%;
  max-height: 900px;
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
