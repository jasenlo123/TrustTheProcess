import React from 'react';
import ARTICLES from './articles';
const Preview = require('./preview');

class CustomComponent extends React.Component {

  getNextArticle() {
    const idx = ARTICLES.findIndex((element) => {
      return element.slug === this.props.slug
    });
    const len = ARTICLES.length;
    return ARTICLES[((idx + 1) % len)];
  }

  render() {
    const { hasError, idyll, updateProps, ...props } = this.props;
    const article = this.getNextArticle();
    return (
      <div className="parametric-recirc-next-article">
        <a href={`/TrustTheProcess/${article.slug}/`}>
          <div>
            <div>Read about another project!</div>
            <div className="highlight-hover">{article.title.slice(11)}</div>
          </div>
          <div style={{textAlign: 'right', fontWeight: 'bold', color: 'purple'}}>
            →
          </div>
        </a>
      </div>
    );
  }
}

module.exports = CustomComponent;