import React, {FC, useState} from 'react';

import './Skills.scss'
import {mySkillProps} from "../../data/data";

interface SkillsProps {
    mySkills: mySkillProps[],
    topMargin: number[]
}

const Skills:FC <SkillsProps> = ({mySkills, topMargin}) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="skills-wrapper" id="skills">
            {/*<div className="skills-header">Skills</div>*/}
            <ul className="skills-tabs noselect">
                {mySkills.map(group =>
                    <li className={["skills-link", activeTab===group.id ? 'active' : ''].join(" ")}
                        onClick={() => setActiveTab(group.id)}
                        key={group.id}
                    >
                        {group.title}
                    </li>
                )}
            </ul>

            <div className="skills-floor">

            </div>
            <div className="skills-content noselect">

                <div className="skills-box">
                    {mySkills.map(group =>
                        <ul className={activeTab===group.id ? 'active' : ''}
                            style={{textAlign: group.align as CanvasTextAlign}}
                            key={group.id}
                        >
                            {group.skill.map((skill, index) =>
                                <li style={{"--k":topMargin[index], [group.align]: skill.alignMargin} as React.CSSProperties}
                                    key={skill.name}
                                >
                                    {skill.name}
                                </li>
                            )}
                        </ul>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Skills;