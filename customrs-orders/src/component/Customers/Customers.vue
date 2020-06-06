<template>
  <div>
    <h1>{{$t("customers.title") | uppercase}}</h1>
    <div class="customerTable">
    <table class="table table-bordered" v-if="customers.length > 0">
      <thead class="thead-dark">
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Title</th>
        <th scope="col">Country</th>
        <th scope="col">Phone</th>
        <th scope="col">Postal Code</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(customer, index) in customers" :key="index">
        <th scope="row">{{index + 1}}</th>
        <td>{{customer.contactName}}</td>
        <td>{{customer.contactTitle}}</td>
        <td>{{customer.country}}</td>
        <td>{{customer.phone}}</td>
        <td>{{customer.postalCode}}</td>
      </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'appCustomers',
  data() {
    return {
      title: 'Customers',
    };
  },
  computed: {
    ...mapGetters({
      customers: 'getCustomers',
    }),
  },
  methods: {
    ...mapActions({
      fetchCustomers: 'loadCustomer',
    }),
  },
  mounted() {
    this.fetchCustomers();
  },
};
</script>
<style>
  .customerTable {
    height:700px;
    overflow: auto;
  }
</style>
