import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion"
import FadeInSections from "./FadeIn"
import {AppProps} from '../App'

const ImageGrid: React.FC <AppProps> = ({setSelectedImg}) => {
    const { docs } = useFirestore("images");

    return (
        <div className="img-grid">
            {docs && docs.map((doc: any) => (
                <FadeInSections>
                <motion.div className="img-wrap" key={doc.id}
                    layout
                    whileHover={{ opacity: 1, scale: 1.2, }}
                    onClick={() => {
                        if(setSelectedImg)setSelectedImg(doc.url)
                    }}
                >
                    
                    <motion.img src={doc.url} alt="uploaded pic"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: .7 }}
                    />
                    
                </motion.div>
                </FadeInSections>
            ))}
        </div>
    )
}

export default ImageGrid;