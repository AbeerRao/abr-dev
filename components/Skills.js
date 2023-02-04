import Image from 'next/image'
import React, { useState } from 'react'
import picture from "../assets/work.png"
import { SiJavascript, SiReact, SiPython, SiHtml5, SiCss3 } from "react-icons/si"

function Skills() {

    const styles = {
        main: "mt-24 flex flex-col items-center space-y-5 w-3/4",
        heading: "font-bold w-full flex justify-center text-5xl bg-[#d7fc70] px-5 py-2 border-2 border-black",
        container1: "flex flex-1 flex-row justify-between items-center space-x-5",
        text: "tracking-widest text-lg",
        container2: "flex flex-col items-start space-y-10 w-full",
        skillBox: "grid grid-cols-2 w-full gap-7",
        skill: "flex flex-col items-start space-y-1 w-full",
        name: "font-bold flex w-1/2 justify-between",
        icon: "logo",
        bar: "bg-[#7e51ff] h-2.5"
    }

    const items = [
        {
            name: "JavaScript",
            logo: SiJavascript,
            barValue: "90%"
        },
        {
            name: "ReactJS",
            logo: SiReact,
            barValue: "80%"
        },
        {
            name: "Python",
            logo: SiPython,
            barValue: "95%"
        },
        {
            name: "HTML",
            logo: SiHtml5,
            barValue: "100%"
        },
        {
            name: "CSS",
            logo: SiCss3,
            barValue: "80%"
        }
    ]

    {items.map((item) => {
        console.log(item)
    })}

    return (
        <div className={styles.main}>
            <p className={styles.heading}>MY SKILLS</p>
            <div className={styles.container1}>
                <Image
                    src={picture}
                    height={394}
                    width={400}
                    alt="work" />
                <div className={styles.container2}>
                    <p className={styles.text}>Here is an overview of my technical skills and how profecient I am in each of them</p>
                    <div className={styles.skillBox}>
                        {
                            items.map((item) => (
                                <div className={styles.skill}>
                                    <p className={styles.name}>{item.name} <item.logo className={styles.icon} /></p>
                                    <div className={styles.bar} style={{ width: item.barValue }}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
