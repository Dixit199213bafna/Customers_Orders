<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">{{$t("title")}}</a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link v-if="token" tag="li" to="/customers" name="customers"
                     active-class="nav-item active"><a class="nav-link">Customer</a></router-link>
        <router-link v-if="token" tag="li" to="/orders" name="orders"
                     active-class="nav-item active"><a class="nav-link">Orders</a></router-link>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown pointer">
            <a class="nav-link dropdown-toggle" @click="isDropDownOpen = !isDropDownOpen"
               role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Language
            </a>
            <ul class="dropdown-menu" :class="{displayblock : isDropDownOpen}">
              <li><a class="dropdown-item" @click.prevent="changeLang('en')">English</a></li>
              <li><a class="dropdown-item" @click.prevent="changeLang('du')">Dutch</a></li>
            </ul>
          </li>
        </ul>
      </form>
      <ul class="navbar-nav">
        <li v-if="token"  active-class="nav-item active"
            @click.prevent="logOut" ><a class="nav-link">Log Out</a> </li>
        <router-link v-if="!token" to="/" tag="li" name="login"
                     active-class="nav-item active"><a class="nav-link" >Log In</a> </router-link>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapActions } from 'vuex';
import tokenMixin from '../mixins/tokenMixin';

export default {
  name: 'appHeader',
  mixins: [tokenMixin],
  data() {
    return {
      isDropDownOpen: false,
    };
  },
  watch: {
    token(newValue, oldValue) {
      if (oldValue && !newValue) {
        this.$router.push('/');
      }
    },
  },
  methods: {
    ...mapActions({
      setTkn: 'setToken',
    }),
    logOut() {
      window.localStorage.removeItem('token');
      this.setTkn(null);
    },
    changeLang(lang) {
      this.isDropDownOpen = !this.isDropDownOpen;
      this.$root.$i18n.locale = lang;
    },
  },
};
</script>
<style>
  .pointer {
    cursor: pointer;
  }
  .displayblock {
    cursor: pointer;
    display: block;
  }
</style>
