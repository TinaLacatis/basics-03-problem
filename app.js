const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      var that = this;
      setTimeout(() => {
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        return "Not there yet";
      } else if (this.counter == 37) {
        return "37";
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    addNumber(num) {
      this.counter = this.counter + num;
    },
  },
});
app.mount("#assignment");
