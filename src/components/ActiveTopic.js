import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { topics } from '../data/topics';

export class ActiveTopic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTopicIndex: null
    };
  }

  componentWillUpdate(prevProps) {
    if(this.props.activeIndex && this.props.activeIndex !== prevProps.activeIndex){
      this.setActiveTopicIndex(this.props.activeIndex);
    }
  }

  setActiveTopicIndex = (index) => {
    this.setState({
      activeTopicIndex: index
    })
  }

  render () {
    const activeTopicIndex = this.state.activeTopicIndex;

    return (
      <>
        {activeTopicIndex && (
          <div className="active-topic-container">
            <div className="active-topic-container-x" onClick={() => this.setActiveTopicIndex(null)}>x</div>
            <div>{topics[activeTopicIndex].name}</div>
          </div>
        )}
      </>
    );
  }
}

ActiveTopic.propTypes = {
  activeIndex: PropTypes.number
}

ActiveTopic.defaultProps = {
  activeIndex: 1
}

export default ActiveTopic;