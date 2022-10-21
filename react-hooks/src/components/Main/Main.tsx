import Loader from 'app/loader';
import Modal from 'components/Modal/Modal';
import Progress from 'components/Progress/Progress';
import Results from 'components/Results/Results';
import SearchBar from 'components/SearchBar/SearchBar';
import React from 'react';
import { IMain, IMainState } from 'types/types';
import './Main.css';

class Main extends React.Component<IMain, IMainState> {
  constructor(props: IMain) {
    super(props);
    this.state = {
      results: [],
      pages: 0,
      count: 0,
      currentPage: Number(localStorage.getItem('currentPage')) || 1,
      query: localStorage.getItem('query') || '',
      index: 1,
      isFetching: true,
      nothingFound: false,
    };
  }

  async updateState(page: number, query: string) {
    const data = await Loader.getData(page, query);
    if (data) {
      const { results, info } = data;
      this.setState({
        results: results,
        pages: info.pages,
        count: info.count,
        nothingFound: false,
        isFetching: false,
      });
    } else {
      this.setState({
        nothingFound: true,
        isFetching: false,
      });
    }
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
    this.setState({ currentPage: 1, isFetching: true });
    this.updateState(1, this.state.query);
    localStorage.setItem('query', this.state.query);
  }

  setIndex(index: number) {
    this.setState({ index });
  }

  render() {
    const { query, results, count, currentPage, pages, index, isFetching, nothingFound } =
      this.state;

    let content;
    if (nothingFound) {
      content = <p className="main__message">Sorry, character not found</p>;
    } else {
      content = (
        <div className="main__container">
          <Results
            results={results}
            count={count}
            currentPage={currentPage}
            pages={pages}
            setOpenModal={this.props.setOpenModal}
            setIndex={this.setIndex.bind(this)}
          />
          {this.props.openModal && (
            <Modal setOpenModal={this.props.setOpenModal} card={results[index]} />
          )}
        </div>
      );
    }

    return isFetching ? (
      <div className="main">
        <Progress />
      </div>
    ) : (
      <div className="main">
        <SearchBar
          query={query}
          handleSubmit={this.handleSubmit.bind(this)}
          handleChange={this.handleChange.bind(this)}
        />
        {content}
      </div>
    );
  }
}

export default Main;
