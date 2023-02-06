import React from 'react'
import worksData from "../works.json"

function Works() {

    const styles = {
        main: "mt-40 w-3/4 flex flex-col items-end",
        heading: "font-bold text-6xl text-right shadow-heading",
        para: "tracking-widest text-lg mt-10",
        container: "grid grid-cols-2 gap-10 w-full mt-10",
        workBox: "cursor-pointer hover:scale-105 transition transform duration-200 flex flex-col items-start justify-around space-y-5 px-7 py-10",
        workHeading: "font-bold text-2xl",
        workDesc: "text-gray-500 tracking-wider text-md",
        workLink: "text-[#7e51ff] font-bold text-lg"
    }

    return (
        <div className={styles.main}>
            <p className={styles.heading}>MY WORKS</p>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorum laborum voluptate similique ad ipsum deleniti necessitatibus quam dolorem praesentium officiis accusantium vel, consectetur hic delectus? Consequuntur vel deleniti architecto.</p>
            <div className={styles.container}>
                {worksData.map((work) => {
                    const customStyle = styles.workBox + " " + work.bg
                    return (
                        <div className={customStyle}>
                            <p className={styles.workHeading}>{work.name}</p>
                            <p className={styles.workDesc}>{work.desc}</p>
                            <p className={styles.workLink}>{work.link}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Works
