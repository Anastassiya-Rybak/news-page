const App = {
    data() {
      return {
        info: [],
        top: [],
        actual: [],
        kz: []
      };
    },
    methods: {
      openAll(){
        document.getElementById('all-news').classList.remove('d-none');
        document.getElementById('top-news').classList.add('d-none');
        document.getElementById('new-news').classList.add('d-none');
        document.getElementById('kz-news').classList.add('d-none');
      },
      openTop(){
        document.getElementById('top-news').classList.remove('d-none');
        document.getElementById('all-news').classList.add('d-none');
        document.getElementById('new-news').classList.add('d-none');
        document.getElementById('kz-news').classList.add('d-none');
      },
      openNew(){
        document.getElementById('all-news').classList.add('d-none');
        document.getElementById('top-news').classList.add('d-none');
        document.getElementById('new-news').classList.remove('d-none');
        document.getElementById('kz-news').classList.add('d-none');
      },
      openKz(){
        document.getElementById('top-news').classList.add('d-none');
        document.getElementById('all-news').classList.add('d-none');
        document.getElementById('new-news').classList.add('d-none');
        document.getElementById('kz-news').classList.remove('d-none');
      }
    },
    mounted() {
      axios
        .get('https://newsapi.org/v2/everything?q=everything&sortBy=popularity&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (this.info = response.data.articles));
      axios
        .get('https://newsapi.org/v2/top-headlines?country=us&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (this.top = response.data.articles));
      axios
        .get('https://newsapi.org/v2/everything?q=everything&from=2022-11-03&to=2022-11-03&sortBy=publishedAt&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (this.actual = response.data.articles));
      axios
        .get('https://newsapi.org/v2/everything?q=harrypotter&apiKey=3dcd0ffb1adb4ee1a91e1f6fa967afa6')
        .then(response => (this.kz = response.data.articles));

    }
}

Vue.createApp(App).mount('#app')