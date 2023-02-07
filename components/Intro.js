import React from 'react'
import Image from 'next/image'

function Intro() {

    const styles = {
        container: "mt-60 flex flex-1 w-3/4 flex-row justify-between items-center px-20",
        heading: "font-bold text-6xl leading-tight shadow-heading",
        para: "w-3/4 mt-5 leading-relaxed text-lg",
        image: "rounded-full border-4 bg-white border-black p-2 border-[#8455ff] hover:scale-105 transition transform duration-200 ease-in-out"
    }

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.heading}>HELLO THERE</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis error nesciunt quasi ratione delectus. Excepturi esse harum autem voluptates dicta ea unde quasi deleniti modi, corporis culpa voluptatum voluptatem suscipit!</p>
            </div>
            <div>
                <Image
                    src="https://avatars.githubusercontent.com/u/59241672?s=400&u=cadb6d5efd741e482ea2896139fa652e81bb4761&v=4"
                    height={700}
                    width={700}
                    className={styles.image}
                    alt="Abeer Rao" />
            </div>
        </div>
    )
}

export default Intro
