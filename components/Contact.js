import React from 'react'

function Contact() {

    const styles = {
        main: "w-3/4 mt-40 flex flex-col items-center",
        heading: "font-bold text-6xl shadow-heading2",
        para: "tracking-widest text-lg mt-10",
        form: "mt-20 w-3/4 flex flex-col items-start bg-white border-2 border-black space-y-5 px-20 py-10 shadow-md shadow-black",
        container: "flex items-center justify-between w-full space-x-5",
        box: "flex flex-col items-start space-y-2 w-full",
        name: "font-semibold text-2xl",
        input: "border-2 py-3 px-5 rounded-2xl w-full",
        submit: "w-full bg-[#d7fc70] border-2 border-black rounded-2xl font-bold text-xl py-3 hover:shadow-md hover:shadow-black hover:scale-105 transition transform duration-200"
    }

    return (
        <div className={styles.main}>
            <p className={styles.heading}>CONTACT</p>
            <p className={styles.para}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <form className={styles.form}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <p className={styles.name}>Name</p>
                        <input className={styles.input} placeholder='Enter your name' />
                    </div>
                    <div className={styles.box}>
                        <p className={styles.name}>Email</p>
                        <input className={styles.input} placeholder='Enter your email' />
                    </div>
                </div>
                <div className={styles.box}>
                    <p className={styles.name}>Message</p>
                    <textarea className={styles.input} placeholder='Enter your message' />
                </div>
                <button className={styles.submit}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
