const React = require('react');

class Annotation extends React.Component {
    render() {
        const { hasError, idyll, updateProps, annotationText, ...props } = this.props;
        return (
            <div className="parametric-annotation">{props.children}<span className="parametric-annotation-text">{annotationText}</span></div>
        );
    }
}

module.exports = Annotation;

