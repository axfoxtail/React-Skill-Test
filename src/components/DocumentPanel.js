import React, { useEffect } from 'react';
import moment from 'moment';

import { documents } from '../data/documents';

const DocumentPanel = ({ documentId }) => {
  const current_document = documents.find(e => e.id === documentId);

  useEffect(() => {
    function handleDocumentMouseDown(e) {
      const elements = document.getElementsByClassName('document-panel-summary')
      if (elements.length && elements[0].contains(e.target)) {
        const element = document.getElementById('summary-container')
        element.style.display = 'block'
      }
    }

    document.addEventListener('mousedown', handleDocumentMouseDown);
  })

  if(!documentId) {
    return (
      <div className="document-panel">
        Please Select A document to see more info
      </div>
    )
  }

  return (
    <div className="document-panel">
      <div className="document-panel-title">
        {'Title: '}
        {current_document.title}
      </div>
      <div className="document-panel-author">
        {'Author: '}
        {current_document.agencies.map(agency => agency.name).join(' ')}
      </div>
      <div className="document-panel-category">
        {'Category: '}
        {current_document.category}
      </div>
      <div className="document-panel-published">
        {'Published: '}
        {moment(current_document.publication_date).format('DD/MM/YYYY')}
      </div>
      <div className="document-panel-summary">
        <div className="documment-summary-element">
          Summary
        </div>
        <div className="document-panel-summary-container" id="summary-container">
          {current_document.summary_text}
        </div>
      </div>
    </div>
  );
}

export default DocumentPanel;