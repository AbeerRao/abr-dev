import React from 'react'
import { FaTwitter, FaLinkedin, FaYoutube, FaDev, FaGithub } from "react-icons/fa"

function Socials() {

    const styles = {
        container: "w-full py-5 flex flex-1 flex-row justify-around items-center mt-44",
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
