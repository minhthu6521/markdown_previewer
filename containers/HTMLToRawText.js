import React, {
	Component
} from 'react';
import TurnDown from 'turndown';

const InputComponent =  ({updateValue, setValue}) =>  {return (<textarea rows="22" type="text" value={setValue} className="form-control" onChange={updateValue} />)}
const SwitchButton = ({clickFunction}) => {return (<button data-type="MarkdownToHTML" type="button" className="btn btn-default switch-button" onClick={clickFunction}>Convert markdown to HTML</button>)}

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			value: "<p><b>This sentence is bold </b></p><p><h1>Header</h1></p>",
		};
	}

	updateValue = (e) => {
    this.setState({
        value: e.target.value
    })
  }
  HTMLToMarkdown(value) {
    let turndown = new TurnDown();
    turndown.addRule('paragraph', {
      filter: 'p',
      replacement: function (content) {
        return '\n\n' + content + '\n\n'
      }
    });
    turndown.addRule('linebreak', {
      filter: 'br',
      replacement: function() {
        return '\n'
      }
    });
    return turndown.turndown(this.state.value);
  }

	render() {
		return ( <div className="row">
    	<div className="col-md-12"><h1>HTML to Markdown</h1></div>
      <div className="col-md-6">
        <InputComponent updateValue={this.updateValue} setValue={this.state.value} />
      </div>
      <div className="col-md-6">
        <pre>{this.HTMLToMarkdown(this.state.value)}</pre>
      </div>
			<div className="col-md-12">
				<SwitchButton clickFunction={this.props.handler}/>
			</div>
    </div> )
	}
}
