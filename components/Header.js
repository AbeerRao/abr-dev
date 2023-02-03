import React from 'react'

function Header() {

    const styles = {
        container: "bg-white sticky top-2 z-50 flex flex-1 w-3/4 flex-row justify-between px-10 py-5 border-2 items-center rounded-3xl border-black shadow-lg shadow-black",
        heading: "font-bold text-2xl hover:cursor-pointer hover:text-[#8455ff] transition transform duration-200 ease-in-out",
        text: "font-semibold text-lg hover:text-[#7b83eb] hover:cursor-pointer transition transform duration-200 ease-in-out"
    }

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.heading}>Abr Rao</p>
            </div>
            <div className="flex flex-row space-x-5">
                <p className={styles.text}>About me</p>
                <p className={styles.text}>Skills</p>
                <p className={styles.text}>Hobbies</p>
                <p className={styles.text}>Get in touch</p>
            </div>
        </div>
    )
}

export default Header
