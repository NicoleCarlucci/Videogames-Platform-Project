var app = new Vue ({
  el:"#vue-container",
  data: {
    research: "",
    videogames: []
  },
  methods: {
    doAResearch() {
      axios.get("https://api.rawg.io/api/games",
      {
        params: {
          key: api_key,
          search: this.research
        }
      }).then(function(result){
          console.log(result.data.results);
          app.videogames = result.data.results;
        })
    }
  }
});
