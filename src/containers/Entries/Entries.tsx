import * as React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';

import Item from '../../components/Entries/item';
import ItemLoader from '../../components/Entries/itemLoader';
import { fetchEntries } from '../../store/actions/index';
import { RootState } from '../../types/index';
import { EntriesActions, EntriesState } from '../../types/store/entries';
import './Entries.scss';

interface Props {
  entriesData: EntriesState;
  fetchEntries: () => void;
}

class Entries extends React.Component<Props & RouteComponentProps> {
  componentWillMount() {
    this.props.fetchEntries();
  }

  render() {
    return (
      <div>
        <InfiniteScroll
          dataLength={this.props.entriesData.entries.length}
          next={() => this.props.fetchEntries()}
          hasMore={this.props.entriesData.hasMoreEntries}
          style={{ overflow: 'scroll' }}
          loader={<div />}
        >
          <div className="Entries">
            {this.props.entriesData.entries.map(entry => (
              <Item key={entry.id} entry={entry} />
            ))}
          </div>
        </InfiniteScroll>
        {this.props.entriesData.isFetching && <ItemLoader />}
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    entriesData: state.entriesData
  };
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, EntriesActions>
) => {
  return {
    fetchEntries: () => dispatch(fetchEntries())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Entries)
);
