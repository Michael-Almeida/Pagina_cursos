<template>
  <div class="card">

    <img :src="image" class="imagem-card" />
    <h2>{{ title }}</h2>
    <p>{{ valor }}</p>
    <button>Fazer Pedido</button>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    description: String,
    valor: String,
    image: Image,
  },
};
</script>

<style>
.card {
  background: #fafafa;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 20px 10px;
  display: flex;
  flex-direction: column;
align-items: left;
}

.card h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000000;
  text-align: left;

}

.card p {
  font-size: 18px;
  color: #000000;
}

.card button {
  width: 170px;
  height: 40px;
  border-radius: 6px;
  background-color: rgb(226, 221, 221);
  color: black;
  border: none;
}
.imagem-card {
  height: 115px;
  width: 196px;
}
</style>
