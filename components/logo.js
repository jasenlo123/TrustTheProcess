const React = require('react');

class Logo extends React.Component {
  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    return (
      <div style={{width: '100%', color: 'black'}}>
        <div className="parametric-cover-title" style={{width: '100%', textAlign: 'left'}}>
          <span style={{characterSpacing: '2.4px', fontSize:"90px", lineHeight:"92px"}}>Trust </span><br/>
          <span style={{characterSpacing: '2.4px', fontSize:"90px", lineHeight:"92px"}}>The </span><br/>
          <span style={{characterSpacing: '2.4px', fontSize:"90px", lineHeight:"92px"}}>Process</span>
        </div>
      </div>
    );
  }
}

module.exports = Logo;