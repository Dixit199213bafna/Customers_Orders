<template>
  <div>
    <h1>{{$t("orders.title") | uppercase}}</h1>
    <div class="orderTable">
    <table class="table table-bordered">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Customer ID</th>
        <th scope="col">Employee ID</th>
        <th scope="col">Ship Name</th>
        <th scope="col">Ship Address</th>
        <th scope="col">Ship Postal Code</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="order in orders" :key="order.order.id">
        <th scope="row" @click.prevent="orderId = order.order.id">{{order.order.id}}</th>
        <td>{{order.order.customerId}}</td>
        <td>{{order.order.employeeId}}</td>
        <td>{{order.order.shipName}}</td>
        <td>{{order.order.shipAddress}}</td>
        <td>{{order.order.shipPostalCode}}</td>
      </tr>
      </tbody>
    </table>
  </div>
    <app-order-detail :id="orderId" v-if="orderId"></app-order-detail>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import OrderDetail from './OrderDetail/OrderDetail';

export default {
  name: 'appOrders',
  data() {
    return {
      title: 'orders',
      orderId: null,
    };
  },
  components: {
    appOrderDetail: OrderDetail,
  },
  computed: {
    ...mapGetters({
      orders: 'getOrders',
    }),
  },
  methods: {
    ...mapActions({
      fetchOrders: 'loadOrders',
    }),
  },
  mounted() {
    this.fetchOrders();
  },
};
</script>
<style>
  .orderTable {
    height:700px;
    overflow: auto;
  }
</style>
