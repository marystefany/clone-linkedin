import React from "react";

import Panel from "../../Panel";
import Skeleton from "../../Skeleton";

import { Container } from "./styles";

const LoadingFeedPost: React.FC = () => {
  return (
    <Container>
      <Panel className="no-shadow">
        <header>
          <Skeleton className="avatar-skeleton" />
          <div className="column">
            <Skeleton className="row-sekeleton" />
            <Skeleton className="row-sekeleton" />
          </div>
        </header>
        <span>
          <Skeleton className="row-sekeleton" />
          <Skeleton className="row-sekeleton" />
        </span>
      </Panel>
    </Container>
  );
};

export default LoadingFeedPost;
