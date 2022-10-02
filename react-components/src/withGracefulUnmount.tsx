import React, { Component, ComponentType } from 'react';
import { IWithGracefulUnmount } from 'types/types';

export default function withGracefulUnmount<T>(WrappedComponent: ComponentType<T>) {
  return class extends Component<T, IWithGracefulUnmount> {
    constructor(props: T) {
      super(props);
      this.state = { mounted: false };
      this.componentGracefulUnmount = this.componentGracefulUnmount.bind(this);
    }

    componentGracefulUnmount() {
      this.setState({ mounted: false });
      window.removeEventListener('beforeunload', this.componentGracefulUnmount);
    }

    componentDidMount() {
      this.setState({ mounted: true });
      window.addEventListener('beforeunload', this.componentGracefulUnmount);
    }

    componentWillUnmount() {
      this.componentGracefulUnmount();
    }

    render() {
      return this.state.mounted ? <WrappedComponent {...this.props} /> : null;
    }
  };
}
