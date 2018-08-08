var vue = require('vue');

var Vue = vue.default;

const VComponent = Vue.component('graceful-component', {
  props: {
    'userName': String,
  },
  render() {
    return(<div><h2>Nice to meet you, { this.userName }!</h2></div>);
  }
})

module.exports = {
  component: VComponent
}
