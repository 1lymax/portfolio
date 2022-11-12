import React, {FC, useEffect} from 'react';
import {VanillaTilt} from "../utils/vanilla-tilt";

import './MyWorks.scss'

interface MyWorksProps {
	works: IWork[]
}

interface IWork {
	id: string;
	title: string;
	description: string
}

const MyWorks: FC <MyWorksProps> = ({works}) => {

	useEffect(() => VanillaTilt.init(document.querySelectorAll(".card"), {
		max: 25,
		speed: 1000
	}), [])


	return (
		<div className="container">
			{works.map(work =>
				<div className="card" key={work.id}>
					<div className="content">
						<h2>{work.id}</h2>
						<h3>{work.title}</h3>
						<p>
							{work.description}
						</p>
						<a href="/">Buy now</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyWorks;