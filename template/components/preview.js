import { ReactTinyLink } from 'react-tiny-link'
const React = require('react');


class Preview extends React.Component {
  render() {
    const { hasError, idyll, updateProps, header, description, url, media, ...props } = this.props;
    return (
      <ReactTinyLink
      header= {header}
      description	 = {description}
        cardSize="small"
        showGraphic={true}
        maxLine={3}
        minLine={1}
        url= {url}
        defaultMedia={media}
      />
    );
  }
}


module.exports = Preview;