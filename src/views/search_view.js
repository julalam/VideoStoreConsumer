import Backbone from 'backbone';
import Search from '../models/search';

const SearchView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
  },
  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
  },
});

export default SearchView;
