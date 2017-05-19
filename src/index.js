import React from 'react'
import {render} from 'react-dom'
import Marked from 'marked'
import "../node_modules/semantic-ui-css/semantic.css"
import "./index.css"

class App extends React.Component{
  state = {
    txt:'## React Markdown'
  }

   editText = (e) =>{
      const txt = e.target.value
      this.setState({txt});
  }

  markedText = (txt) =>{
    const renderTxt = Marked(txt, {sanitize: true})
    return {__html:renderTxt}
  }

  render(){
    return(
      <div className="ui container">
        <div className="box-container">
            <textarea  value={this.state.txt} className="box red" name="" onChange={(e) => this.editText(e)}>
            </textarea>
          <div className="box ui blue message" dangerouslySetInnerHTML={this.markedText(this.state.txt)}>
          </div>
        </div>
      </div>
    )
  }
}
render(<App/>, document.getElementById('App'))
