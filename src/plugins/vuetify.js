import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: '#09bc8a',
        secondary: '#004346',
        accent: '#75dddd',
        error: '#f44336',
        success: '#75eda6',
        warning: '#FDD835',
        title: '#2e2c2f',
        subtitle: '#5c595f',
        text: '#666369', 
        bg: '#F5F5F5',
        bgContent: '#fff'
      },
      dark: {
        primary: '#09bc8a',
        title: '#FAFAFA',
        subtitle: '#e0dfe1',
        text: '#b8b5ba',
        bgContent: '#363636'
      }
    }
  }
})
