import clickOutside from "./clickoutside.js";

/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */

const GlobalDirectives = {
  install(Vue) {
    Vue.directive("clickoutside", clickOutside);
  }
};

export default GlobalDirectives;
