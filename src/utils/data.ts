export const myWorks = [
	{
		id: '01',
		title: 'E-Commerce',
		image: "/img/webdev-01.png",
		description: ''
	},
	{
		id: '02',
		title: 'Web-storage',
		image: "/img/webdev-02.png",
		description:  ''
	},
	{
		id: '03',
		title: 'E-currency Exchanger',
		image: "/img/webdev-03.png",
		description:  ''
	},
	{
		id: '04',
		title: 'Dev One',
		description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
	},
	{
		id: '05',
		title: 'Dev Two',
		description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
	},
	{
		id: '06',
		title: 'Dev Three',
		description:  'fdbfd d rgdfg f dfgreg ewjutkr uyrkr krt krtkyt rkry krty etrj retj ert ter jkkrek'
	},
]





export const topMargin = [
	1.3, 2, 2.8, 4, 5.5
]


export interface SkillGroup {
	id: number;
	title: string;
	align: string;
	skill: []
}

export interface mySkillProps {
	id: number,
	title: string,
	align: string,
	skill: Array<
		{
			name: string;
			alignMargin: number
		}
	>
}

export const mySkills:Array <mySkillProps> = [
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