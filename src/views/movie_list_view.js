import Backbone from 'backbone';
import MovieView from './movie_view';
import Movie from '../models/movie';

const MovieListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render() {
    this.$('section.movies ul').empty();

    this.model.forEach((movie) => {
      const movieView = new MovieView({
        model: movie,
        template: this.template,
        tagName: 'li',
        className: 'movie',
      });
      this.$('section.movies ul').append(movieView.render().$el);
    });

    return this;
  },
  events: {
  },
});

export default MovieListView;
