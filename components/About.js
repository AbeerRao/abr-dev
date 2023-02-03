import React from 'react'

function About() {

    const styles = {
        container: "mt-24 flex flex-1 w-full divide-x-2 divide-black",
        left: "w-1/2 flex flex-col items-start px-5 bg-[#ffcbfa] py-20 border-y-2 border-black",
        right: "w-1/2 flex flex-col items-start px-5 bg-[#7e51ff] py-20 text-white border-y-2 border-black",
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
