import React, {FC, useEffect, useState} from 'react';
import {VanillaTilt} from "../utils/vanilla-tilt";

import './MyWorks.scss'

interface MyWorksProps {
    works: Array<{
        id: string;
        title: string;
        image?: string | undefined;
        description: string | React.ReactNode;
        backface: {
            link?: string;
            description: string | React.ReactNode;
        }
    }>
}

const MyWorks: FC<MyWorksProps> = ({works}) => {
    const [back, setBack] = useState(-1);

    useEffect(() => VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 1000
    }), [])


    return (
        <div className="container">
            {works.map((work, index) =>
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
									 style={{background: `url(${work.image})`, backgroundSize: 'cover'}}></div>
                            }
                            <div className="more-info">
                                More info...
                            </div>
                        </div>
                    </div>
                    <div className={["back", back === index ? "active" : "hidden"].join(" ")}
                         onClick={() => setBack(-1)}>
                        {work.backface.link &&
                            <a href={work.backface.link} target="_blank" rel="noreferrer">{work.backface.link}</a>
                        }
                        {work.backface.description}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyWorks;