<template>
  <div>
    <ProductCard :products="products" />
  </div>
</template>
<script>
import ProductCard from "@/components/ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      products: [],
    };
  },
  async created() {
    await fetch("http://localhost:3000/products")
      .then((e) => e.json())
      .then((result) => (this.products = result));
  },
};
</script>
