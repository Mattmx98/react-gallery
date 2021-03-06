import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import './quiz.css';

class QuizSrc extends React.Component {
  constructor(props){
    super(props);
    this.state = { open: false };
  }

  render() {
    const headerButtonMessage = this.state.open ?
      'Hide' :
      'Show the JSON data defining this quiz'
    ;
    const headerButton = (
      <Button onClick={ () => this.setState({ open: !this.state.open })}>
        {headerButtonMessage}
      </Button>
    );
    return (
      <div className="quiz-src">
        <div>
          <Panel
            header={headerButton}
            collapsible
            expanded={this.state.open}>
            <pre style={{textAlign: "left"}}>{JSON.stringify(this.props.quiz, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default QuizSrc;
