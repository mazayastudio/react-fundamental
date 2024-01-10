import * as React from "react";
import PropTypes from "prop-types";

const App = () => {
	const stories = [
		{
			title: "React",
			url: "https://reactjs.org/",
			author: "Jordan Walke",
			num_comments: 3,
			points: 4,
			objectID: 0,
		},
		{
			title: "Redux",
			url: "https://redux.js.org/",
			author: "Dan Abramov, Andrew Clark",
			num_comments: 2,
			points: 5,
			objectID: 1,
		},
	];
	return (
		<div>
			<h1>My Hacker Stories</h1>

			<Search />

			<hr />

			<List list={stories} />
		</div>
	);
};

const List = (props) => (
	<ul>
		{props.list.map((item) => (
			<Item key={item.objectID} item={item} />
		))}
	</ul>
);
List.propTypes = {
	list: PropTypes.array.isRequired,
};

const Item = (props) => (
	<li>
		<span>
			<a href={props.item.url}>{props.item.title}</a>
		</span>
		<span>{props.item.author}</span>
		<span>{props.item.num_comments}</span>
		<span>{props.item.points}</span>
	</li>
);
Item.propTypes = {
	item: PropTypes.shape({
		url: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		num_comments: PropTypes.number.isRequired,
		points: PropTypes.number.isRequired,
	}).isRequired,
};

const Search = () => {
	const [searchTerm, setSearchTerm] = React.useState("");

	const handleChange = (evt) => {
		setSearchTerm(evt.target.value);
	};

	return (
		<div>
			<label htmlFor="search">Search:</label>
			<input type="text" id="search" onChange={handleChange} />
			<p>
				Searching for <strong>{searchTerm} </strong>
			</p>
		</div>
	);
};

export default App;
