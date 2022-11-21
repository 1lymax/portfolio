import React, {FC, useEffect, useState} from 'react';
import {VanillaTilt} from "../utils/vanilla-tilt";

import './MyWorks.scss'

interface MyWorksProps {
    worksType: string[];
    works: Array<{
        id: string;
        workType: string;
        title: string;
        image?: string | undefined;
        imageOver?: string | undefined;
        description: string | React.ReactNode;
        backface: {
            link?: string;
            description: string | React.ReactNode;
        }
    }>
}

const MyWorks: FC<MyWorksProps> = ({works, worksType}) => {
    const [back, setBack] = useState(-1);
    const [active, setActive] = useState(worksType[0]);

    useEffect(() => VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 1000
    }), [])

    return (
        <div className="container">
            <div className="myworks-header">Projects</div>
            <div className="myworks-nav">
                <ul>
                    {worksType.map(type =>
                        <li className={active === type ? 'active' : ''}
                            onClick={() => {
                                setActive(type)
                                setBack(-1)
                            }}
                            key={type}
                        >
                            {type}
                        </li>
                    )}
                </ul>
            </div>
            <div className="myworks-content">
                {works.filter(work => work.workType === active).length === 0 &&
					<div className="card">
						<div className="front">
							<div className="front-content">
								<h2>#00</h2>
								<h3>Empty</h3>
								<p>
									There is no completed works under this section now.
								</p>
                            </div>
						</div>
                    </div>
                }

                {works.filter(work => work.workType === active).map((work, index) =>
                    <div className="card" key={work.id}>
                        <div className={["front", back !== index ? "active" : "hidden"].join(" ")}
                             onClick={() => setBack(index)}
                        >
                            <div className="front-content">
                                <h2>{work.id}</h2>
                                <h3>{work.title}</h3>
                                <p>
                                    {work.description}
                                </p>
                                {work?.image &&
									<div className="image"
										 style={{background: `url(${work.image}) 0 0 / cover no-repeat`}}></div>
                                }
                                <div className="more-info">
                                    More info...
                                </div>
                            </div>
                        </div>
                        <div className={["back", back === index ? "active" : "hidden"].join(" ")}
                             onClick={() => setBack(-1)}>
                            {work.backface.link &&
								<a href={work.backface.link} target="_blank" rel="noreferrer">
                                    {work.backface.link}
                                    <i className="fa-solid fa-arrow-up-right-from-square"/>
                                </a>
                            }
                            {work.backface.description}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyWorks;