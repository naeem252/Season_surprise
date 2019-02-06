import React from "react";

function getSeason(lat, month) {
	if (month > 2 && month < 9) {
		return lat > 0 ? "Summer" : "Winter";
	} else {
		console.log(lat);
		return lat > 0 ? "Winter" : "Summer";
	}
}

const SeasonDetail = props => {
	//<i class="fas fa-cloud-sun"></i>
	var newLat = props.lat.slice(9);
	const season = getSeason(newLat, new Date().getMonth());
	const text =
		season === "Winter" ? "Burr,It's chilly" : "Let's hit the beach";
	const icon = season === "Winter" ? "far fa-snowflake" : "fas fa-cloud-sun";
	const fColor =
		season === "Winter" ? { color: "#e6e6ff" } : { color: "#feffa0" };
	console.log(season);
	return (
		<div className="d-flex justify-content-center flex-column align-items-center">
			<i
				className={`${icon} align-self-start my-3 ml-4`}
				style={fColor}
			/>
			<h1 className="display-1">{text}</h1>
			<i className={`${icon} align-self-end my-3 mr-4`} style={fColor} />
		</div>
	);
};

SeasonDetail.defaultProps={
	lat:null
}

export default SeasonDetail;
