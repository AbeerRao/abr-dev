import React from 'react'

function About() {

    const styles = {
        container: "mt-40 rounded-3xl w-3/4 flex flex-1 divide-x-2 divide-black border-2 border-black",
        left: "about-div px-10 bg-[#ffcbfa] rounded-l-3xl",
        right: "about-div px-10 bg-[#7e51ff] text-white rounded-r-3xl",
        heading: "font-bold text-4xl",
        para: "leading-relaxed text-lg mt-10"
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.heading}>ABOUT ME</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam possimus voluptates veritatis harum blanditiis incidunt illo accusantium commodi mollitia sapiente voluptatem sit exercitationem, cum quasi. Magnam, ab mollitia! Ipsam.</p>
            </div>
            <div className={styles.right}>
                <p className={styles.heading}>MY GOALS</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti ullam possimus voluptates veritatis harum blanditiis incidunt illo accusantium commodi mollitia sapiente voluptatem sit exercitationem, cum quasi. Magnam, ab mollitia! Ipsam.</p>
            </div>
        </div>
    )
}

export default About
