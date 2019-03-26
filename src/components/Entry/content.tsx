import * as React from 'react';
import { IoIosApps, IoMdTime } from 'react-icons/io';

import { Entry } from '../../types/model';
import './content.scss';
import ContentLoader from './contentLoader';

interface Props {
  entry: Entry;
}

const item: React.SFC<Props> = (props: Props) => (
  <div className="EntryContent">
    <div className="EntryContent-container">
      {props.entry ? (
        <div>
          <div className="EntryContent-image">
            <img src={props.entry.imageUrl} alt={props.entry.title} />
          </div>
          <h2 className="EntryContent-title">{props.entry.title}</h2>
          <p className="EntryContent-summary">
            {props.entry.summary.length > 95
              ? props.entry.summary.slice(0, 95) + '…'
              : props.entry.summary}
          </p>
          <div className="EntryContent-info">
            <span className="EntryContent-info--feedName">
              <IoIosApps size="16px" />
              <span>{props.entry.feed.name}</span>
            </span>
            <span className="EntryContent-info--publishedAgo">
              <IoMdTime size="16px" />
              <span>{props.entry.publishedAgo}前</span>
            </span>
          </div>
          <a
            className="EntryContent-link"
            href={props.entry.url}
            target="_blank"
          >
            続きを読む
          </a>
        </div>
      ) : (
        <div className="EntryContent-loader">
          <ContentLoader />
        </div>
      )}
    </div>
  </div>
);

export default item;
