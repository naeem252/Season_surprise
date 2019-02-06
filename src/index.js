import React from "react";
import ReactDOM from "react-dom";
import SeasonDetail from "./SeasonDetail";
import "bootstrap/dist/css/bootstrap.min.css";
import './SeasonDetail.css'

class App extends React.Component {
	state = { lat: NaN, errorMssg: NaN };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMssg: err.message })
		);
	}
	renderContent(){
		if (this.state.lat && !this.state.errorMssg) {
			return (
				<div>
					<SeasonDetail lat={"Lattiuid:"+this.state.lat} />
				</div>
			);
		} else if (!this.state.lat && this.state.errorMssg) {
			return (
				<div>
					<SeasonDetail lat={"Errot:" + this.state.errorMssg} />
				</div>
			);
		}
		return (
			<div className=" spiner d-flex justify-content-center align-items-center">
				<h3 className="display-4">
					<i className="fa fa-spinner fa-spin"></i>
					<h4>Allow us</h4>
				</h3>
			</div>
		);
	}

	render() {
		return(
			<div>{this.renderContent()}</div>
			)
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
