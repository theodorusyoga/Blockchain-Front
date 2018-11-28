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
                            <table class="table b-table table-striped table-hover" v-if="data.length > 0 && !isLoading">
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
                            <div v-else-if="data.length === 0 && isLoading">
                            <vue-loading type="bars" color="rgb(32, 160, 255)" :size="{ width: '50px', height: '50px' }"></vue-loading>
                            </div>
                            <div v-else>
                              <base-alert type="info">
                                <span class="alert-inner--text"><strong>Info!</strong> Data is Not Available</span>
                              </base-alert>
                            </div>
                        <div class="mt-5 py-5 border-top text-center">
                            <div class="row justify-content-center">
                                <div class="col-lg-9">
                                    <p>An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
                                    <a href="#">Show more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>

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
      data: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.isLoading = true
      await getDataBalances()
      .then(({data})=> {
        this.data = data.data
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
