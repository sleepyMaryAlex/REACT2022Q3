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
    const { currentPage, query } = this.state;
    localStorage.setItem('query', query);
    localStorage.setItem('currentPage', currentPage.toString());
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement;
    const query = target.value;
    this.updateState(1, query);
    this.setState({ query, currentPage: 1 });
  }

  render() {
    const { query, results, count, currentPage, pages } = this.state;
    return (
      <div className="main">
        <SearchBar query={query} handleChange={this.handleChange.bind(this)} />
        <Results results={results} count={count} currentPage={currentPage} pages={pages} />
      </div>
    );
  }
}

export default Main;
