import firebase from "firebase";
import config from "../config";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			products: [
				{
					title: "FIRST",
					background: "white",
					liked: false
				},
				{
					title: "SECOND",
					background: "white",
					liked: false
				}
			]
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				firebase.initializeApp(config);

				firebase
					.database()
					.ref("/")
					.on("value", snapshot => {
						var username = snapshot.val();
						console.log(username);
					});
			}
		}
	};
};

export default getState;
