import React, {
	Component
} from 'react';

const InputComponent =  ({updateValue, setValue}) =>  {return (<textarea rows="22" type="text" value={setValue} className="form-control" onChange={updateValue} />)}

export default class Result extends Component {
	constructor() {
		super();
		this.state = {
			value: "# Marked in browser\n\nRendered by **marked**",
		};
	}

	updateValue(e) {
    this.setState({
        value: e.target.value
    })
  }
  rawMarkup(value) {
    var rawMarkup = marked(value, {sanitize: true});
    return { __html: rawMarkup };
  }

	render() {
		return ( <div className="row">
      <div className="col-md-6">
        <InputComponent updateValue={this.updateValue.bind(this)} setValue={this.state.value} />
      </div>
      <div className="col-md-6">
        <span dangerouslySetInnerHTML={this.rawMarkup(this.state.value)} />
      </div>
    </div> )
	}
}
