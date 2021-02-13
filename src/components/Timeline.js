import React, { useState } from 'react';
import moment from 'moment';
import { documents } from '../data/documents';
import { topics } from '../data/topics';
import DocumentPanel from './DocumentPanel';
import ActiveTopic from './ActiveTopic';

const Timeline = () => {
  const [search, setSearch] = useState('');
  const [activeDocument, setActiveDocument] = useState(null);
  const [activeTopic, setActiveTopic] = useState(undefined);


  const determineActiveTopic = (topicName) => {
    const index = topics.findIndex(topic => topic.name === topicName);
    setActiveTopic(index);
  }

  const renderDocumentItems = () => {
    documents.forEach((document, i) => {
      if(!document.title.includes(search)) {
        documents.splice(i, i)
      }
    })


    const document_items = documents.map(document => {
      return(
        <div
          className="document-item"
          onClick={() => setActiveDocument(document.id)}
        >
          <div className="document-item-header">
            <div>
              {document.title.toLocaleLowerCase()}
            </div>
            <div>
              {moment(document.publication_date).format('MM/DD/YYYY')}
            </div>
          </div>
          <div className="document-item-footer">
            <div className="topics-container">
              {document.topics.map(topic => {
                return (
                  <div
                    className="topic-element"
                    onClick={() => determineActiveTopic(topic.name)}
                  >
                    {topic.name}
                  </div>
                )
              })}
            </div>
            <div>
              {document.category}
            </div>
          </div>
        </div>
      );
    });

    return document_items;
  }

  return (
    <>
      <div className="timeline-container">
        <div className="search-elements-container">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by Title"
          />
          <ActiveTopic activeIndex={activeTopic} />
        </div>
        <div className="documents-container">
          {renderDocumentItems()}
        </div>
      </div>
      <DocumentPanel documentId={activeDocument} />
    </>
  );
}

export default Timeline;
