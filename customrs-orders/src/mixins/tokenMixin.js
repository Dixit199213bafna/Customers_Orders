import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      token: 'getToken',
    }),
  },
};
