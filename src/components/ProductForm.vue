<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="submitData">
      <v-file-input label="choose picture" @change="addImage"></v-file-input>
      <v-select
        label="select brand"
        :items="brands"
        v-model="product.brand"
      ></v-select>
      <v-select
        label="select model"
        :items="models"
        v-model="product.model"
      ></v-select>
      <v-text-field
        v-model="product.desc"
        :rules="rules"
        label="description"
      ></v-text-field>
      <v-text-field
        v-model="product.price"
        :rules="rules"
        label="price"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
export default {
  data() {
    return {
      product: {
        brand: "",
        model: "",
        price: "",
        desc: "",
        img: "",
      },
      brands: [
        "BMW",
        "benz",
        "toyota",
        "hiundai",
        "kia",
        "mitsobishi",
        "honda",
        "mazda",
        "volexwagen",
        "audi",
        "bently",
        "aston martin",
        "crisler",
        "ferari",
        "ford",
        "land rover",
        "volvo",
      ],
      models: [
        "x3",
        "maybach",
        "camry",
        "sonata",
        "rio",
        "lancer",
        "civic",
        "3",
        "bitle",
        "tt",
        "continental",
        "db9",
        "cricler",
        "laferari",
        "focus",
        "evoc",
        "v70",
      ],
    };
  },
  methods: {
    addImage(event) {
      const file = event.target.files[0];
      this.product.img = URL.createObjectURL(file);
    },
    async submitData() {
      console.log("----------");
      await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(this.product),
      });
      // await axios.get('http://localhost:3000/products')
      // await axios.post('http://localhost:3000/products',JSON.stringify(this.product))
      // await axios.delete('http://localhost:3000/products',id )
      // await axios.put()
      (this.product.id = ""),
        (this.product.brand = ""),
        (this.product.model = ""),
        (this.product.price = ""),
        (this.product.img = ""),
        (this.product.desc = "");
    },
  },
};
</script>
