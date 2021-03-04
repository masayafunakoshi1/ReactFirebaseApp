import React, { useEffect } from "react";
import useStorage from "../Hooks/useStorage";
import { motion } from "framer-motion";
import {FilesProps} from '../App'
// import {newFilesProps} from './UploadForm'


const ProgressBar: React.FC <FilesProps>= ({ file, setFile }) => {
    const { url, progress } = useStorage(file);

    useEffect(() => {
        if (url) {
            if(setFile)setFile(null);
        }
    }, [url, setFile])

    return (
        <motion.div className="progress-bar"
            initial={{ width: 0 }}
            animate={{ width: progress + "%" }}>
        </motion.div >
    )
}

export default ProgressBar