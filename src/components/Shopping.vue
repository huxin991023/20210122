<template>
  <div id="app">
    <h1>购物车示例</h1>
    <p>姓名: {{ $store.state.userInfo.username }}</p>
    <hr />
    <h2>产品</h2>
    <ProductList />
    <hr />
    <h2>购物车</h2>
    {{ $store.state.products.id}}
    <br>
    {{$store.state.products.xiaomi}}
    <br>
    {{$store.state.products.oppo}}
    <br>
    总价格:￥{{$store.state.products.price}}
  </div>
</template>

<script>
import ProductList from "./ProductList";
export default {
  name: "App",
  components: { ProductList }
};
</script>

<style></style>
