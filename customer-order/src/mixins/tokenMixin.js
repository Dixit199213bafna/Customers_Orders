import {mapGetters} from "vuex";

export const tokenMixin = {
  computed: {
    ...mapGetters({
      token: 'getToken',
    })
  },
}
