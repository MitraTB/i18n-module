<template>
  <div class="container">
    <b-card-group deck>
      <div v-for="product in products" :key="product.id">
        <nuxt-link :to="`/products/${product.id}`" style="text-decoration: none">
          <b-card
            :title="product.title"
            :img-src="product.image"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
            img-height="200"
          >
            <b-card-text>
              {{ product.description }}
            </b-card-text>

            <b-button href="#" variant="primary">
              Delete
            </b-button>
          </b-card>
        </nuxt-link>
      </div>
    </b-card-group>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      products: []
    }
  },
  async created () {
    const response = await axios.get('http://localhost:3000/blocks')
    this.products = response.data
  }
  // async asyncData () {
  //   const result = await axios.get('http://localhost:3000/blocks')
  //   console.log(result)
  //   const products = result.data
  //   return { products }
  // }
}
</script>
<style scoped>
.container {
  margin-top: 40px;
}
</style>
