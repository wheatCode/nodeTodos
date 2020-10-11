var firebase = require("firebase-admin");
var serviceAccount = require("../../stock-68055-firebase-adminsdk-n28a6-acc55fb426.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://stock-68055.firebaseio.com",
});

module.exports = {
  get: async function (path) {
    const val = await firebase
      .database()
      .ref(path)
      .once("value")
      .then((snackShop) => {
        return snackShop.val();
      });
    return val;
  },
  post: async function (data, path) {
    const vm = this;
    const val = await firebase
      .database()
      .ref(path)
      .push(data)
      .then(async () => {
        return await vm.get(path);
      });
    return val;
  },
  remove: async function (id, path) {
    const vm = this;
    const val = await firebase
      .database()
      .ref(path)
      .child(id)
      .remove()
      .then(async () => {
        return await vm.get(path);
      });
    return val;
  },
};
