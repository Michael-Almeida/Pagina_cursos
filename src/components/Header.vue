<template>
  <header class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="logo">
            <img class="logo_img" src="../assets/capa1.png" alt="" />
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
  width: 380px;
  position: absolute;
  left: 33px;
  top: 15px;
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
  align-items: center;
  position: absolute;
}
.menu ul li {

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
.nome_empresa{
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-style: oblique;
color: black;
text-shadow:  white 2px 2px;
font-size: 40px;

}
.header_right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
