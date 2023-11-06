import { useDropzone } from 'react-dropzone';
import { convertToBs64 } from '../utils/convertToBs64';

const FileUpload = ({ addItem }) => {
    const { getRootProps, getInputProps } = useDropzone({
        onDrop: async (acceptedFiles) => {
            const bs64_img = await convertToBs64(acceptedFiles[0]);
            addItem(bs64_img)
        },
    });

    return (
        <div className="text-center file-upload-card p-3 bg-light rounded" {...getRootProps()}>
            <div>
                <input accept="image/png, image/jpg, image/jpeg" {...getInputProps()} />
                <img className="img-upload" alt="File upload" src="https://i.pinimg.com/564x/04/54/7c/04547c2b354abb70a85ed8a2d1b33e5f.jpg" />
                <p>Drag and drop files here or <strong>click to browse.</strong></p>
            </div>
        </div>
    );
};
export default FileUpload;