import React, {
	Component
} from 'react';

import RawTextToHTML from './RawTextToHTML.js'
import HTMLToRawText from './HTMLToRawText'
export default class App extends Component {
	constructor() {
		super();
		this.state = {
			value: "MarkdownToHTML",
		};
		this.handler = this.updateState.bind(this);
	}
	updateState = (e) => {
		this.setState({
			value: e.target.dataset.type
		})
	}
	render() {
			if (this.state.value == "MarkdownToHTML") {
				return ( < RawTextToHTML handler = {this.handler}/ > )
				}
				else {
					return ( < HTMLToRawText handler = {this.handler}/ >)
					}
				}
			}
