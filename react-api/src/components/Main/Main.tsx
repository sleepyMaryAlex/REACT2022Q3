import Loader from 'app/loader';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMainState } from 'types/types';
import './Main.css';

class Main extends React.Component<object, IMainState> {
  constructor(props: object) {
    super(props);
    this.state = {
      results: [],
      pages: 0,
      count: 0,
      currentPage: Number(localStorage.getItem('currentPage')) || 1,
      query: localStorage.getItem('query') || '',
    };
  }

  async updateState(page: number, query: string) {
    const { results, info } = await Loader.getData(page, query);
    this.setState({
      results: results,
      pages: info.pages,
      count: info.count,
    });
  }

  async componentDidMount() {
    const { currentPage, query } = this.state;
    this.updateState(currentPage, query);
  }

  componentWillUnmount() {
    const { currentPage } = this.state;
    localStorage.setItem('currentPage', currentPage.toString());
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    this.setState({ query: target.value });
  }

  handleSubmit() {
    this.setState({ currentPage: 1 });
    this.updateState(1, this.state.query);
    localStorage.setItem('query', this.state.query);
  }

  render() {
    const { query, results, count, currentPage, pages } = this.state;
    return (
      <div className="main">
        <SearchBar
          query={query}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        <Results results={results} count={count} currentPage={currentPage} pages={pages} />
      </div>
    );
  }
}

export default Main;
