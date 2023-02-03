import React, { useState } from 'react'
import { useEffect } from 'react'

function scrollProgress() {

    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScroll = () => {
            const progress = window.scrollY
            const scrollHeight = document.body.scrollHeight - window.innerHeight
            if (scrollHeight){
                setCompletion(
                    Number((progress / scrollHeight).toFixed(2)) * 100
                )
            }
        }
        window.addEventListener('scroll', updateScroll)
        return () => window.removeEventListener('scroll', updateScroll)
    }, [])

    return completion
}

export default scrollProgress
