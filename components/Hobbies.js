import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import picture from "../assets/hobby.png"
import hobbiesData from "../hobbies.json"

export default function Hobbies() {

    const styles = {
        main: "mt-40 h-max w-full flex flex-col items-center px-10 py-10 bg-gray-100",
        textContainer: "flex flex-row items-center space-x-2",
        heading: "font-bold text-4xl rotate-90 text-[#fd693f]",
        para: "tracking-widest text-lg",
        bigDaddy: "flex flex-1 items-start space-x-10 w-full justify-between mt-20",
        list: "flex flex-col space-y-5",
        content: "flex flex-col space-y-5 w-1/3",
        contentHeading: "font-bold text-xl",
        contentPara: "tracking-widest",
        keySection: "border-2 border-black paper w-1/3 px-5 py-3",
        activeText: "font-bold text-2xl cursor-pointer text-[#8455ff]",
        listName: "text-gray-600 font-bold text-2xl cursor-pointer",
        keyHeading: "text-[#8455ff] font-bold text-xl mb-5"
    }

    const [active, setActive] = useState(["Star Wars", 0])

    useEffect(() => {
        const getProfileData = async () => {
            const data = await fetch("https://api.chess.com/pub/player/xbrrxo/stats")
                .then(res => res.json())
            hobbiesData[2].keys[0][1] = data.chess_rapid.last.rating
            hobbiesData[2].keys[1][1] = ((data.chess_rapid.record.win / (data.chess_rapid.record.win + data.chess_rapid.record.loss + data.chess_rapid.record.draw))*100).toFixed(2).toString()
        }
        return getProfileData
    }, [])

    const items = hobbiesData

    return (
        <div className={styles.main}>
            <div className={styles.textContainer}>
                <p className={styles.heading}>MY HOBBIES</p>
                <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, fugiat amet enim ab possimus, accusantium perferendis autem impedit sapiente natus sed deserunt rem commodi consectetur, ullam optio doloremque voluptatum neque?</p>
                <Image
                    src={picture}
                    height={394}
                    width={400}
                    alt="hobby" />
            </div>
            <div className={styles.bigDaddy}>
                <div className={styles.list}>
                    {items.map((item, id) => {
                        if (item.name === active[0]) {
                            return (
                                <p key={id} className={styles.activeText}>{item.name}</p>
                            )
                        } return (
                            <p key={id} className={styles.listName} onClick={() => setActive([item.name, id])}>{item.name}</p>
                        )
                    })}
                </div>
                <div className={styles.content}>
                    <p className={styles.contentHeading}>{items[active[1]].name}</p>
                    <p className={styles.contentPara}>{items[active[1]].content}</p>
                </div>
                <div className={styles.keySection}>
                    <p className={styles.keyHeading}>HIGHLIGHTS</p>
                    {items[active[1]].keys.map((key, id) => (
                        <p key={id} className="text-gray-600 mb-2">{key[0]}<span className="text-black font-bold">{key[1]}</span></p>
                    ))}
                </div>
            </div>
        </div>
    )
}