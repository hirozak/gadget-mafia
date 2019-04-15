import * as React from 'react';
import { IoIosApps, IoMdTime } from 'react-icons/io';
import { Link } from 'react-router-dom';

import { Entry } from '../../types/model';
import './item.scss';

interface Props {
  entry: Entry;
}

const item: React.SFC<Props> = (props: Props) => (
  <div className="EntriesItem">
    <Link
      to={{
        pathname: `/entries/${props.entry.slug}`,
        state: { entry: props.entry }
      }}
      className="EntriesItem-link"
    >
      <img
        className="EntriesItem-image"
        src={props.entry.imageUrl}
        alt={props.entry.title}
      />
      <p className="EntriesItem-title">{props.entry.title}</p>
      <div className="EntriesItem-info">
        <span className="EntriesItem-info--feedName">
          <IoIosApps size="15px" />
          <span>{props.entry.feed.name}</span>
        </span>
        <span className="EntriesItem-info--publishedAgo">
          <IoMdTime size="15px" />
          <span>{props.entry.publishedAgo}前</span>
        </span>
      </div>
    </Link>
  </div>
);

export default item;
