const React = require('react');

class Issue extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div>
        <div className="parametric-issue-title">
          <div>An Interactive</div>
           <div>Portfolio & Process Write-ups</div>
        </div>
        <div className="parametric-issue-date">
          A Capstone Project by Jasen Lo
        </div>
      </div>

      
      
    );
  }
}

module.exports = Issue;