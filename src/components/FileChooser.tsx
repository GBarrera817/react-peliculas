import { useState, type ChangeEvent } from "react";
import styles from './FileChooser.module.css'

export default function FileChooser(props: FileChooserProps){

    const [imageBase64, setImageBase64] = useState('');
    const [imageURL, setImageURL] = useState(props.imageURL ? props.imageURL : '')

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget.files) {
            const file = e.currentTarget.files[0];
            toBase64(file)
                .then(value => setImageBase64(value))
                .catch(error => console.error(error));
            props.selectedImage(file);
            setImageURL('');
        }
    }

    const toBase64 = (file: File) => { 
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();

            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = (error) => reject(error);
        })
    }

    return (
        <div className="form-group">
            <label htmlFor="">{props.label}</label>
            <div>
                <input type="file" accept=".jpg,.jpeg,.png" onChange={handleOnChange} />
            </div>
            { imageBase64 ? 
                <div className={styles.div}>
                    <div>
                        <img src={imageBase64} alt="selected Image" />
                    </div>
                </div> 
                : undefined}

            { imageURL ? 
                <div className={styles.div}>
                    <div>
                        <img src={imageURL} alt="actor picture" />
                    </div>
                </div> 
                : undefined}
        </div>
    )
}

interface FileChooserProps {
    label: string;
    imageURL?: string;
    selectedImage: (file: File) => void; 
}