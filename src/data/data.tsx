
export const topMargin = [
    1.3, 2, 2.8, 4, 5.5
]


export interface mySkillProps {
    id: number,
    title: string,
    align: string,
    skewX: number,
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
        skewX: -20,
        skill: [
            {
                name: "React.js",
                alignMargin: -70
            },
            {
                name: "Typescript",
                alignMargin: -58
            },
            {
                name: "Redux-Toolkit",
                alignMargin: -34
            },
            {
                name: "RTK-Query",
                alignMargin: -4
            },
        ]
    },
    {
        id: 2,
        title: "Backend",
        align: "left",
        skewX: -10,
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
        skewX: 0,
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
        skewX: 0,
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