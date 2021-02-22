<template>
  <div style="margin-top: 3rem">
    <b-card
      no-body
      class="overflow-hidden; ml-5"
      style="max-width: 700px; text-align: center"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="block.image"
            alt="Image"
            class="rounded-0"
            img-height="300"
          />
        </b-col>
        <b-col md="6">
          <b-card-body :title="block.title">
            <b-card-text>
              {{ block.description }}
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    const result = await axios.get(`http://localhost:3000/blocks/${params.id}`)
    const block = result.data
    return { block }
  }
}
</script>
