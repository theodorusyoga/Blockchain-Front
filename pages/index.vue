<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container">
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-4">
                        <div class="row justify-content-center">
                            <div class="col-lg-3 order-lg-2">
                                <div class="card-profile-image">
                                    <a href="#">
                                        <img v-lazy="'img/theme/team-4-800x800.jpg'" class="rounded-circle">
                                    </a>
                                </div>
                            </div>
                        </div>
                          <div class="text-center mt-4 mb-2">
                              <h3>Balance List</h3>
                              <p>UnJDead.store</p>
                            </div>
                            <div class="table-data" v-if="data.length > 0 && !isLoading">
                              <table class="table b-table table-striped table-hover" >
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Dollars</th>
                                    <th>Amount</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr v-for="(data, index) in data" :key="data.unique_id">
                                    <td>{{index+1}}</td>
                                    <td>{{data.name}}</td>
                                    <td>{{data.dollars}}</td>
                                    <td>{{data.amount}}</td>
                                  </tr>
                                </tbody>
                              </table>
                              <b-pagination align="center" size="md" :total-rows="total_data" v-model="current_page" :per-page="per_page" @input="getData" />
                            </div>
                            <div v-else-if="isLoading" class="my-4">
                            <vue-loading type="bars" color="rgb(32, 160, 255)" :size="{ width: '50px', height: '50px' }"></vue-loading>
                            </div>
                            <div v-else>
                              <base-alert type="info">
                                <span class="alert-inner--text"><strong>Info!</strong> Data is Not Available</span>
                              </base-alert>
                            </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
  @import '../assets/scss/index.scss';
</style>

<script>
import Logo from '~/components/Logo.vue'
import { VueLoading } from 'vue-loading-template'
import { getDataBalances } from '../utils/Api';

export default {
  components: {
    Logo,
    VueLoading
  },

  data() {
    return {
      isLoading: true,
      data: [],
      total_data: 0,
      current_page: 1,
      per_page: 10
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.isLoading = true
      await getDataBalances(this.per_page, this.current_page)
      .then(({data})=> {
        this.data = data.data
        this.total_data = data.meta.total_data
        this.isLoading = false
      })
      .catch((error) => {
        this.$toasted.show('Oops something happen please reload page!', {
          type: 'error',
          duration: 5000
        })
        this.isLoading = false
      })
    }
  }
}
</script>
