import React from 'react';
import './Body.css';
import Header from './Header';

function Body({ spotify }) {
	return (
		<div className="body">
			<Header spotify={spotify} />

			<div className="body__info">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRRVM08tUfWsNNG7Rh8AmDs5WIJ39ElUgMGmA&usqp=CAU"
					alt=""
				/>

				<div className="body__infoText" >
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description</p>
        </div>
			</div>
		</div>
	);
}

export default Body;
