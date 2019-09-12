import React from "react";

type State = {
  error: boolean;
};

export default class ErrorBoundary extends React.Component<{}, State> {
  state: State = {
    error: false
  };

  componentDidCatch(error: Error) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return <div>Something went wrong...</div>;
    }

    return this.props.children;
  }
}
