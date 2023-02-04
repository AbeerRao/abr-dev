import React from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaDev, FaGithub } from "react-icons/fa"

function Socials() {

    const styles = {
        container: "w-5/6 bg-[#daf464] mt-24 py-5 flex flex-1 flex-row justify-around border-2 border-black items-center",
    }

    return (
        <div className={styles.container}>
            <div className="icon twitter">
                <FaTwitter />
            </div>
            <div className="icon linkedin">
                <FaLinkedin />
            </div>
            <div className="icon youtube">
                <FaYoutube />
            </div>
            <div className="icon github">
                <FaGithub />
            </div>
            <div className="icon dev">
                <FaDev />
            </div>
        </div>
    )
}

export default Socials
