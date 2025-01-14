import React, { Component } from "react";

import { IProps, IState } from "components/errorHandlers//interfaces";
import { ErrorComponent } from "components/errorHandlers/ErrorComponent";

class ErrorBoundary extends Component<IProps, IState> {
  public state: IState = {
    hasError: false,
  };

  public static getDerivedStateFromError(): IState {
    return { hasError: true };
  }

  public componentDidCatch(_error: Error): void {
    console.log("Error", _error);
  }

  public render(): React.ReactNode {
    if (this.state.hasError) {
      return <ErrorComponent />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
