<template>
  <div class="d-flex justify-center">
    <v-card
      v-for="product in products"
      :key="product.id"
      class="mx-auto"
      width="400"
    >
      <v-img class="align-end text-white" height="200" :src="product.img" cover>
      </v-img>
      <v-card-title>{{ product.model }}</v-card-title>
      <v-card-subtitle class="pt-4"> {{ product.brand }}</v-card-subtitle>

      <v-card-text>
        <div class="description">asdad{{ product.desc }}</div>
        <div>{{ product.price }}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange"> Share </v-btn>

        <v-btn color="orange"> Explore </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
<style>
@media only screen and (min-width: 800px) {
  .description {
    display: none;
  }
}
</style>
