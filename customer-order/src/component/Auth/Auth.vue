<template>
  <form class="login">
    <div class="alert alert-danger" role="alert" v-show="error">
      {{error}}
    </div>
    <div class="form-group">
      <label>Email address</label>
      <input v-model="email" type="email" class="form-control"  placeholder="Enter email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary" @click.prevent="onSignUp" v-if="singUp">Sing Up</button>
    <button type="submit" class="btn btn-primary" @click.prevent="onSignIn" v-if="!singUp">Sing In</button>
    <button type="submit" class="btn btn-primary" @click.prevent="singUp = !singUp">Switch to Sign In</button>
  </form>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  import { tokenMixin } from "../../mixins/tokenMixin";

  export default {
    mixins: [ tokenMixin ],
    data() {
      return {
        email: null,
        password: null,
        singUp: true
      }
    },
    computed: {
      ...mapGetters({
        error: 'getErrorMsg'
      })
    },
    watch: {
      token (newValue, oldValue) {
        if(!oldValue && newValue) {
          const path = this.$router.history._startLocation && this.$router.history._startLocation !== '/'? this.$router.history._startLocation : '/customers';
          this.$router.push(path);
        }
      }
    },
    methods: {
      ...mapActions({
        signIn: 'signIn',
        signUp: 'signUp',
        setTkn: 'setToken',
      }),
      onSignUp() {
        this.signUp({email: this.email, password: this.password});
      },
      onSignIn() {
        this.signIn({email: this.email, password: this.password});
      }
    },
    mounted() {
      if(localStorage.getItem('token')) {
        this.setTkn(localStorage.getItem('token'));
      }
    }
  }
</script>
<style>
  form.login {
    margin: 0 auto;
    width: 300px;
    padding: 30px;
  }
</style>
