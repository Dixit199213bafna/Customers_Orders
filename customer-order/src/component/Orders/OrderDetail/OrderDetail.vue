<template>
  <div>
    <h1>Order Detail</h1>
      <table class="table">
        <tbody>
          <tr v-for="(value, key) of ordrDetail">
          <td>
            <strong>{{key | uppercase}}</strong>
          </td>
          <td>
            {{value}}
          </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    props: ['id'],
    methods:{
      ...mapActions({
          getOrderDetail: 'fetchOrderDetail'
      })
    },
    computed: {
      ...mapGetters({
          ordrDetail: 'gorderDetail'
      })
    },
    watch: {
      id: function(newVal, oldVal) {
        if(!oldVal || newVal !== oldVal) {
          this.getOrderDetail(this.id);
        }
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
      }
    },
    mounted() {
      this.getOrderDetail(this.id);
    }
  }
</script>
