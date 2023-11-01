const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    addFive() {
      this.counter = this.counter + 5;
    },
    addOne() {
      this.counter = this.counter + 1;
    },
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
});
app.mount("#assignment");
