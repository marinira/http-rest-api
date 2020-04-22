import { h, render, Component } from 'preact';
import { route } from 'preact-router';
import classNames from 'classnames';

export default class FarmlistTable extends Component {
	render({ content, clicked }) {
		const row_style = {
			verticalAlign: 'middle',
			textAlign: 'center'
		};

		const list = content.map(item => <Farmlist content={ item } clicked={ clicked } />);

		return (
			<div>
				<table className="table is-hoverable is-fullwidth">
					<thead>
						<tr>
							<th style={ row_style }>farmlist</th>
							<th style={ row_style }>village</th>
							<th style={ row_style }>remove</th>
						</tr>
					</thead>
					<tbody>
						{list}
					</tbody>
				</table>
			</div>
		);
	}
}

class Farmlist extends Component {
	render({ content, clicked }) {
		let { farmlist, village_name } = content;

		const row_style = {
			verticalAlign: 'middle',
			textAlign: 'center'
		};

		const icon = classNames({
			'fas': true,
			'fa-lg': true,
			'fa-minus': true
		});

		return (
			<tr>
				<td style={ row_style }>
					{farmlist}
				</td>
				<td style={ row_style }>
					{village_name}
				</td>
				<td style={ row_style }>
					<a class="has-text-black" onClick={ e => clicked(content) }>
						<span class="icon is-medium">
							<i class={ icon }></i>
						</span>
					</a>
				</td>
			</tr>
		);
	}
}
