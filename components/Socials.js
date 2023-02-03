import React from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaDev, FaGithub } from "react-icons/fa"

function Socials() {

    const styles = {
        container: "mt-24 flex flex-1 w-3/4 flex-row justify-between items-center",
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
