<template>
  <div>
    <b-container class="bv-example-row custom-row">
      <b-row>
        <b-form
          class="text-left custom-form"
          @submit="handleSubmit"
        >
          <b-form-group label="Username">
            <b-form-input
              v-model="payload.username"
              type="text"
              required
              placeholder="Enter Username"/>
          </b-form-group>
          <b-form-group label="Password">
            <b-form-input
              v-model="payload.password"
              type="password"
              required
              placeholder="Enter password"/>
          </b-form-group>
          <b-button
            type="submit"
            variant="primary"
          >Submit</b-button>
        </b-form>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import { login } from '../utils/Api.js'
export default {
	data() {
		return {
			payload : {
				username: '',
				password: ''
			}
		}
	},

	methods: {
		async handleSubmit(e) {
      e.preventDefault()
      await login(this.payload).then((response)=> {
        Cookies.set('token', response.data.token)
        this.$toasted.show('Login Success', { 
          theme: "primary",
          type: 'success',
          position: "top-right",
          onComplete: this.$router.push('/'),
          duration : 1000
        }).goAway(500)
      })
      .catch((error)=> {
        this.$toasted.show(error.response.data.message, { 
          theme: "primary",
          type: "error",
          position: "top-right",
          duration : 5000
        })
      })
			
		}
	}

}
</script>

<style lang="scss">
.custom-row {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .custom-form {
    border: 1px solid gainsboro;
    border-radius: 4px;
    min-width: 300px;
    padding: 20px;
  }
}
  
</style>
