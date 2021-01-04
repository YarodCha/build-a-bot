export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    /** @returns {Object} */
    parts() {
      return this.$store.state.robots.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
