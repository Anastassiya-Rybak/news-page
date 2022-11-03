const App = {
    data() {
      return {
        info: []
      };
    },
    mounted() {
      axios
        .get('https://newsapi.org/v2/everything?q=apple&from=2022-11-02&to=2022-11-02&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (this.info = response.data.articles));
    }
}

Vue.createApp(App).mount('#app')