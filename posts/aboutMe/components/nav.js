import React from 'react';
import ARTICLES from './articles';

const formatTitle = (title) => {
  return title.reduce((memo, str, i) => {
    if (i < title.length - 1) {
      return memo.concat([<span key={str}>{str}</span>, <br key={i} />]);
    }
    return memo.concat([<span key={str}>{str}</span>]);
  }, [])
}

class Nav extends React.PureComponent {

  constructor(props) {
    super(props);
    this.handleContents = this.handleContents.bind(this);
    this.state = {
      showContent: false
    }
  }

  handleContents() {
    this.setState({
      showContent: !this.state.showContent
    });
  }

  render() {
    return (
      <div className="parametric-article-nav">
          <div>
            <div style={{fontFamily:'Courier New', textDecoration: 'none', color: 'silver'}}>Trust The Process | A Capstone Project</div>
          </div>
          <div className="parametric-nav-links" style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            fontFamily: 'Courier New',
            textDecoration: 'none',
            color: 'purple'
          }}>
            <a href="/TrustTheProcess" >
            Jasen's Interactive Data Viz Portfolio
            </a>
            <div className='parametric-nav-toc' style={{cursor: 'pointer', textDecoration: 'none', fontSize: 48, position: 'relative', top: -8}} onClick={this.handleContents}>
              ☰
            </div>

          </div>
          <div className="parametric-issue-toc" style={{
            // display: this.state.showContent ? 'block' : 'none',
            position: 'fixed',
            width: 400,
            right: this.state.showContent ? 0 : -400,
            top: 0,
            bottom: 0,
            padding: '1em',
            paddingTop: '4em',
            background: 'silver',
            overflow: 'auto',
            maxWidth: '100vw',
            zIndex: 999,
            transition: 'all 0.75s'
            }}>

            <div onClick={this.handleContents} style={{ cursor: 'pointer', textAlign: 'right', fontFamily: 'Courier New', position: 'relative', top: '-1em', fontSize: 36, marginBottom: 0 }}>
              ✖
            </div>
            {
              ARTICLES.map(({title, titleBreaks, slug, author}, i) => {
                return (
                <div style={{textAlign: 'right'}} key={slug}>
                  <div style={{marginBottom: '1em', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <div>
                      <div style={{fontFamily: 'Courier New', fontWeight: 500}}>
                        <a style={{color: '#222'}} href={`/TrustTheProcess/${slug}/`}>{formatTitle(titleBreaks)}</a>
                      </div>
                      <div style={{fontStyle: 'italic', fontWeight: 400, fontFamily: 'Courier New'}}>
                        {author}
                      </div>
                    </div>
                    <div style={{marginLeft: '1em', fontFamily: 'Courier New', fontWeight: 500}}>
                      {title.slice(0,10)}
                    </div>
                  </div>
                </div>
                )
              })
            }
            <div style={{textAlign: 'right'}}>
              <div style={{marginTop: '3em', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <div style={{fontFamily: 'Courier New', fontWeight: 500}}>
                <a style={{color: '#222'}} href={`/TrustTheProcess/introduction/`}>Introduction</a>
                </div>
              </div>
              <div style={{ marginBottom: '1em', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <div style={{fontFamily: 'Courier New', fontWeight: 500}}>
                  <a style={{color: '#222'}} href={`/TrustTheProcess/aboutMe/`}>About Me</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default Nav;