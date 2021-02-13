import React, { useState } from "react"
import ProgressBar from "./ProgressBar";
import { motion } from "framer-motion"
import "./UploadForm.css"

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ["image/png", "image/jpeg"];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image file (png or jpeg)");
        }
    }

    return (
        <form>
            <motion.label className="fileInsertButton"
                whileHover={{ scale: 1.2, rotate: 90 }}>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </motion.label>

            {/* Gets information uploaded to API, filename and upload status */}
            <div className="output">
                {error && <div className="error"> {error}</div>}
                {file && <div> {file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form >
    )
}

export default UploadForm;