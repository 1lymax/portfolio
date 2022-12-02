
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
                name: "RTK-Query",
                alignMargin: -108
            },
            {
                name: "Redux-Toolkit",
                alignMargin: -90
            },
            {
                name: "Typescript",
                alignMargin: -63
            },
            {
                name: "React.js",
                alignMargin: -18
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
                name: "Django",
                alignMargin: -11
            },
            {
                name: "Python",
                alignMargin: -2
            },
            {
                name: "Express",
                alignMargin: 8
            },
            {
                name: "Node.js",
                alignMargin: 16
            },
        ]
    },
    {
        id: 3,
        title: "UI/UX",
        align: "right",
        skewX: 1,
        skill: [
            {
                name: "Material-UI",
                alignMargin: 40
            },
            {
                name: "Semantic-UI",
                alignMargin: 48
            },
            {
                name: "SCSS/SASS",
                alignMargin: 56
            },
        ]
    },
    {
        id: 4,
        title: "Supporting",
        align: "right",
        skewX: 10,
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