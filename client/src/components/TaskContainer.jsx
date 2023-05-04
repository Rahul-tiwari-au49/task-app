import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const TasksContainer = ({ socket }) => {
	/*const [tasks, setTasks] = useState({});

	useEffect(() => {
		function fetchTasks() {
			fetch("http://localhost:5000/api")
				.then((res) => res.json())
				.then((data) => setTasks(data));
		}
		fetchTasks();
	}, []);

	useEffect(() => {
		socket.on("tasks", (data) => {
			setTasks(data);
		});
	}, [socket]);

	const handleDragEnd = ({ destination, source }) => {
		if (!destination) return;
		if (
			destination.index === source.index &&
			destination.droppableId === source.droppableId
		)
			return;

		socket.emit("taskDragged", {
			source,
			destination,
		});
	};*/
	return (
		<div className='container'>
			<div className="pending__wrapper">
				<h3>Pending Tasks</h3>
				<div className="pending__container">
					<div className="pending__items">
						<p>the notification center</p>
						<p className="comment">
							<Link to="/comments">2 Comments</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="ongoing__wrapper">
				<h3>ONGoing Tasks</h3>
				<div className="ongoing__container">
					<div className="ongoing__items">
						<p> create design for center</p>
						<p className="comment">
							<Link to="/comments">Add Comments</Link>
						</p>
					</div>
				</div>
			</div>
			<div className="completed__wrapper">
				<h3>Completed Tasks</h3>
				<div className="completed__container">
					<div className="completed__items">
						<p>the notification center</p>
						<p className="comment">
							<Link to="/comments">2 Comments</Link>
						</p>
					</div>
				</div>
			</div>
			</div>
	);
};

export default TasksContainer;