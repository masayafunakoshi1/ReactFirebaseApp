import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from "../firebase/config";

const useStorage = (file: File) => {
    const [progress, setProgress] = useState<number>(0);
    const [error, setError] = useState<string | null>(null);
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on("state_changed", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err: any) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            //Allows for a timestamp of document downloaded in firestore
            const createdAt = timestamp();
            collectionRef.add({ url, createdAt });
            setUrl(url);
        })
    }, [file])

    return { progress, url, error }
}

export default useStorage