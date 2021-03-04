import React from "react"
import { motion } from "framer-motion"
import {AppProps} from '../App'


const Modal: React.FC <AppProps> = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e: any) => {
        if (e.target.classList.contains("backdrop")) {
            if(setSelectedImg)setSelectedImg(null)
        }
    }

    return (
        <motion.div className="backdrop" onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            <motion.img 
                src={selectedImg!} 
                alt="Enlarged Pic"
                initial={{ y: "-100vh" }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}


export default Modal