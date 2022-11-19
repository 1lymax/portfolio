import React, {FC, useState} from 'react';

import './Skills.scss'
import {mySkillProps} from "../../utils/data";

interface SkillsProps {
    mySkills: mySkillProps[],
    topMargin: number[]
}

const Skills:FC <SkillsProps> = ({mySkills, topMargin}) => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="skills-wrapper">
            <ul className="skills-tabs">
                {mySkills.map(group =>
                    <li className="skills-link" onClick={() => setActiveTab(group.id)}>{group.title}</li>
                )}
            </ul>
            <div className="skills-content">
                <div className="skills-box">
                    {mySkills.map(group =>
                        <ul className={activeTab===group.id ? 'active' : ''}
                            style={{textAlign: group.align as CanvasTextAlign}}
                        >
                            {group.skill.map((skill, index) =>
                                <li style={{"--k":topMargin[index], [group.align]: skill.alignMargin} as React.CSSProperties}>{skill.name}</li>
                            )}
                        </ul>
                    )}

                    {/*<ul className={activeTab===2 ? 'active' : ''}>*/}
                    {/*    <li style={{"--k":1.3} as React.CSSProperties}>Python</li>*/}
                    {/*    <li style={{"--k": 2} as React.CSSProperties}>Django</li>*/}
                    {/*    <li style={{"--k": 2.8} as React.CSSProperties}>789</li>*/}
                    {/*</ul>*/}
                    {/*<ul className={activeTab===3 ? 'active' : ''}>*/}
                    {/*    <li style={{"--k":1.3} as React.CSSProperties}>CI/CD</li>*/}
                    {/*    <li style={{"--k": 2} as React.CSSProperties}>Docker</li>*/}
                    {/*    <li style={{"--k": 2.8} as React.CSSProperties}>Jest</li>*/}
                    {/*</ul>*/}
                </div>

            </div>
        </div>
    );
};

export default Skills;