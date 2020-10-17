import React, { useState } from 'react';
import axios from 'axios';
import emptyPhoto from '../assets/emptyPhoto.svg';

const AddPhoto = ({ setGameData, gameData, id, name, buttonText }) => {
	const [ photo, setPhoto ] = useState();
	function uploadImage(e) {
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'challengerGameArtWork');
		axios
			.post('https://api.cloudinary.com/v1_1/dx6zzyfed/image/upload', data)
			.then((res) => {
				console.log(res.data);
				setPhoto(res.data.secure_url);
				setGameData({ ...gameData, [name]: res.data.secure_url });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<div className="photoButtonContainer">
			<input name={name} className="uploadButton" id={`uploadButton${id}`} type="file" onChange={uploadImage} />
			<label className="fakeUploadButton" htmlFor={`uploadButton${id}`}>
				Choose {buttonText}
			</label>

			<img className="imgPreview" src={photo ? photo : emptyPhoto} />
		</div>
	);
};

export default AddPhoto;
