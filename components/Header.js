import React from 'react'
import scrollProgress from "../hooks/scrollProgress"

function Header() {

    const styles = {
        main: "w-3/4 flex flex-col justify-center items-center sticky top-2 z-50",
        container: "bg-white sticky top-2 z-50 flex flex-1 w-full flex-row justify-between px-10 py-5 border-2 items-center rounded-3xl border-black",
        heading: "font-bold text-2xl hover:cursor-pointer hover:text-[#8455ff] transition transform duration-200 ease-in-out",
        text: "font-semibold text-lg hover:text-[#7b83eb] hover:cursor-pointer transition transform duration-200 ease-in-out",
        progress: "w-11/12 border-b-8 h-10 top-10 rounded-3xl absolute border-b-[#54eaff] h-1 transition transform duration-50"
    }

    const completion = scrollProgress()

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div>
                    <p className={styles.heading}>Abr Rao</p>
                </div>
                <div className="flex flex-row space-x-5">
                    <p className={styles.text}>About me</p>
                    <p className={styles.text}>Skills</p>
                    <p className={styles.text}>Hobbies</p>
                    <p className={styles.text}>My Works</p>
                    <p className={styles.text}>Get in touch</p>
                </div>
            </div>
            <div
                style={{ transform: `scaleX(${completion / 100})` }}
                className={styles.progress} />
        </div>
    )
}

export default Header
