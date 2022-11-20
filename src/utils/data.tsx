import React from "react";

export const myWorks = [
    {
        id: '01',
        title: 'E-Commerce',
        image: "/img/webdev-01.png",
        description: '',
        backface: {
            link: 'https://rentserv.herokuapp.com',
            description:
                <ul>
                    <li>React.js.</li>
                    <li>Python/Django</li>
                    <li>Semantic-UI.</li>
                    <li>Material-UI / SASS.</li>
                    <li>REST.</li>
                    <li>CI/CD / Heroku.</li>
                    <li>JWT-authentication.</li>
                    <li>Online-shop.</li>
                    <li>Live search, filtering, sorting.</li>
                    <li>Custom hooks, reused components.</li>
                </ul>
        }
    },
    {
        id: '02',
        title: 'Web-storage',
        image: "/img/webdev-02.png",
        description: '',
        link: '',
        backface: {
            link: 'cloudisx.herokuapp.com',
            description:
                <ul>
                    <li>React.js / Typescript.</li>
                    <li>Node.js / Mongo.db.</li>
                    <li>Redux.</li>
                    <li>Material-UI / SASS.</li>
                    <li>CI/CD / Heroku.</li>
                    <li>JWT-authentication.</li>
                    <li>File upload/download/removing.</li>
                    <li>Drag'n'Drop, sorting, searching.</li>
                </ul>

        }
    },
    {
        id: '03',
        title: 'E-currency Exchanger',
        image: "/img/webdev-03.png",
        description: '',
        backface: {
            link: 'github.com/1lymax/obmenov.com',
            description:
                <ul>
                    <li>PHP + MySQL.</li>
                    <li>No frameworks used in development.</li>
                    <li>Fully automated 24/7 E-currency exchanger.</li>
                    <li>User authorization, profile, cabinet, personal discount system.</li>
                    <li>Affiliate program, admin panel, cron tasks.</li>
                    <li>Connected API\'s of Webmoney, Liqpay, PrivatbankUA, Perfectmoney, Liberty Reserve, SMS-service payment systems. </li>
                    <li>Online-shop for e-vouchers and digital content.</li>
                </ul>
        }
    },
    // {
    // 	id: '04',
    // 	title: 'Dev One',
    // 	description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
    // },
    // {
    // 	id: '05',
    // 	title: 'Dev Two',
    // 	description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
    // },
    // {
    // 	id: '06',
    // 	title: 'Dev Three',
    // 	description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
    // },
]


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
                alignMargin: -110
            },
            {
                name: "Redux-Toolkit",
                alignMargin: -87
            },
            {
                name: "RTK-Query",
                alignMargin: -58
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
                name: "Git",
                alignMargin: -102
            },
            {
                name: "Docker",
                alignMargin: -91
            },
        ]
    }
]