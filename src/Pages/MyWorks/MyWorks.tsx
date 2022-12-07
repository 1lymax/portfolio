import React, {FC, useEffect, useState} from 'react';

import './MyWorks.scss'
import {VanillaTilt} from "../../utils/vanilla-tilt";
import {imageAnimatedPath, imagePath} from "../../utils/path";

interface MyWorksProps {
    worksType: string[];
    setModalId: (workId: number) => void;
    works: Array<{
        id: number;
        num: string;
        type: string;
        title: string;
        haveExample?: boolean;
        backface: {
            link?: string;
            description: string | React.ReactNode;
        }
    }>
}

const MyWorks: FC<MyWorksProps> = ({works, worksType, setModalId}) => {
    const [back, setBack] = useState(-1);
    const [worksShow, setWorksShow] = useState<typeof works>([]);
    const [group, setGroup] = useState(worksType[0]);
    const [imageAnimated, setImageAnimated] = useState('');

    const openDemoModal = (e: React.MouseEvent<HTMLDivElement>, workId: number) => {
        e.preventDefault()
        e.stopPropagation()
        setModalId(workId)
    }

    const openBackface = (e, index) => {
        e.stopPropagation()
        e.preventDefault()
        setBack(index)
    }

    useEffect(() => {
        setWorksShow(works.filter(work => work.type === worksType[0]))
    }, []);

    useEffect(() => VanillaTilt.init(document.querySelectorAll(".card"), {
        max: 25,
        speed: 1000
    }), [group])


    return (
        <div className="container" id="portfolio">
            <div className="myworks-header noselect">Projects</div>
            <div className="myworks-nav noselect">
                <ul>
                    {worksType.map(type =>
                        <li className={group === type ? 'active' : ''}
                            onClick={() => {
                                setGroup(type)
                                setWorksShow(works.filter(work => work.type === type))
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
                {worksShow.map((work, index) =>
                    // <CSSTransition key={work.num + work.title} timeout={500} classNames="card">
                        <div className="card">
                            <div className={["front", back !== index ? "active" : "hidden"].join(" ")}
                                 onClick={(e) => {
                                     work.haveExample ? openDemoModal(e, work.id) : setBack(index)
                                 }}
                            >
                                <div className="front-content noselect">
                                    <h2>{work.num}</h2>
                                    <h3>{work.title}</h3>
                                    <div className="image"
                                         onMouseOver={() => setImageAnimated(work.num)}
                                         onMouseLeave={() => setImageAnimated('')}
                                         style={{
                                             background: `url(${
                                                 imageAnimated === work.num && work.haveExample ? imageAnimatedPath(work.id) : imagePath(work.id)
                                             }) 0 0 / cover no-repeat`
                                         }}
                                    />
                                    <div className="buttons-container">
                                        <div className="more-info" onClick={(e) => openBackface(e, index)}>
                                            More info...
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className={["back", back === index ? "active" : "hidden"].join(" ")}
                                 onClick={() => setBack(-1)}>
                                {work.backface.link &&
									<a href={`https://${work.backface.link}`} target="_blank" rel="noreferrer">
                                        {work.backface.link}
										<i className="fa-solid fa-arrow-up-right-from-square"/>
									</a>
                                }
                                {work.backface.description}
                            </div>
                        </div>
                    // </CSSTransition>
                )}
            </div>
        </div>
    );
};

export default MyWorks;