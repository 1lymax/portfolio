import React, {FC, useEffect} from 'react';
import {VanillaTilt} from "../utils/vanilla-tilt";

import './MyWorks.scss'

interface MyWorksProps {
	works: IWork[]
}

interface IWork {
	id: string;
	title: string;
	image?: string | undefined;
	description: string | React.ReactNode
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
						{work?.image &&
							<div className="image" style={{background: `url(${work.image})`, backgroundSize: 'cover'}}></div>
						}
						<a href="/">More info...</a>
					</div>
				</div>
			)}
		</div>
	);
};

export default MyWorks;