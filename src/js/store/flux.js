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
			loadSomeData: () => {
				firebase.initializeApp(config);

				firebase
					.database()
					.ref("/")
					.on("value", snapshot => {
						var db = snapshot.val();
						console.log(db);
					});
			}
		}
	};
};

export default getState;
