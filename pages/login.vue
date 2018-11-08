<template>
  <div>
    <b-container class="bv-example-row ">
      <b-row class="justify-content-md-center">
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
import CryptoJS from 'crypto-js'
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
		handleSubmit(e) {
			e.preventDefault()
			const encrypted = CryptoJS.AES.encrypt(this.payload.password, process.env.VUE_APP_SECRET).toString();
			console.log(encrypted)
		}
	}

}
</script>

<style lang="scss">
  .custom-form {
	  border: 1px solid gainsboro;
	  border-radius: 4px;
    min-width: 300px;
    padding: 20px;
	}
</style>
