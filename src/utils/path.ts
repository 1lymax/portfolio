import {myWorksData} from "../data/myWorksData";

export const getDirFilePath = (workId: number) => {
    const work = myWorksData.filter(work => work.id === workId)[0]
    const workName = work.title.toLowerCase().replaceAll(" ", "_")
    const dir = work.type.toLowerCase().replaceAll(" ", "_")
    return `${dir}/${workName}`
}

export const imagePath = (workId: number) => {
    return `/img/webdev/${getDirFilePath(workId)}.png`
}

export const imageAnimatedPath = (workId: number) => {
    return `/img/webdev/${getDirFilePath(workId)}_animated.gif`
}

export const workDemoPath = (workId: number) => {
    if (!workId) return ''
    return `/works/${getDirFilePath(workId)}/index.html`
}