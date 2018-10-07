var vue = require('vue');

var Vue = vue.default;

const VComponent = Vue.component('graceful-component', {
  props: {
    'userName': String,
  },
  methods: {
    greetings() {this.$emit('greetings')}
  },
  render() {
    return(
      <div>
        <h2>Nice to meet you, { this.userName }!</h2>
        <button onClick={this.greetings}>Hello</button>
      </div>
    );
  }
})

module.exports = {
  component: VComponent
}
