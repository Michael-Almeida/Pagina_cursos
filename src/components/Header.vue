<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="logo">
            <img class="logo_img" src="../assets/capa.png" alt="" />
          </h1>
        </div>
        <div>
          <h1 class="nome_empresa">SchoolTec</h1>

          <div class="col-md-6 header_right">
            <nav class="menu">
              <ul>
                <li>Cliente</li>
                <li>Pedidos</li>
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header {
  background-color: hsl(198, 22%, 85%);
  height: 170px;
  width: 100%;
  color: white;
  border: solid #afafaf 1px;
  border-radius: 2px;
}
.logo {
  width: 170px;
  padding: 5%;
  margin-top: 19px;
}
.logo_img {
  width: 344px;
  position: absolute;
  left: 13px;
  top: 5px;
  border: solid rgb(218, 218, 218) 1px;
  border-radius: 3px;
}

.header_text {
  color: #e2e2e2;
  font-size: 14px;
  font-style: italic;
  margin: 8px;
  font-weight: 700;
}
.menu ul {
  list-style: none;
  font-style: italic;
  padding: 0;
  margin: 0;
  color: #000000;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  position: absolute;
}
.menu ul li {
  padding: 4px 14px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 0.5px;
}
.menu ul li:not(:last-child):after {
  content: "";
  display: inline-block;
  width: 1px;
  background-color: #e2e2e2;
  height: 10px;
  margin-left: 10px;
}
.menu ul li:hover {
  background-color: rgb(207, 207, 207);
}
.header_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
