
export const topMargin = [
    1.3, 2, 2.8, 4, 5.5
]


export interface mySkillProps {
    id: number,
    title: string,
    align: string,
    skill: Array<{
        name: string;
        alignMargin: number
    }>
}

export const mySkills: Array<mySkillProps> = [
    {
        id: 1,
        title: "Frontend",
        align: "left",
        skill: [
            {
                name: "React.js",
                alignMargin: -104
            },
            {
                name: "Typescript",
                alignMargin: -87
            },
            {
                name: "Redux-Toolkit",
                alignMargin: -58
            },
            {
                name: "RTK-Query",
                alignMargin: -18
            },
        ]
    },
    {
        id: 2,
        title: "Backend",
        align: "left",
        skill: [
            {
                name: "Node.js",
                alignMargin: -11
            },
            {
                name: "Express",
                alignMargin: -2
            },
            {
                name: "Python",
                alignMargin: 8
            },
            {
                name: "Django",
                alignMargin: 16
            },
        ]
    },
    {
        id: 3,
        title: "UI/UX",
        align: "right",
        skill: [
            {
                name: "SCSS/SASS",
                alignMargin: 11
            },
            {
                name: "Semantic-UI",
                alignMargin: 6
            },
            {
                name: "Material-UI",
                alignMargin: -2
            },
        ]
    },
    {
        id: 4,
        title: "Supporting",
        align: "right",
        skill: [
            {
                name: "CI/CD",
                alignMargin: -118
            },
            {
                name: "Jest",
                alignMargin: -109
            },
            {
                name: "Docker",
                alignMargin: -102
            },
            {
                name: "Git",
                alignMargin: -91
            },
        ]
    }
]