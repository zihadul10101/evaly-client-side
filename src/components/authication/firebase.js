import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD_FJoFwTkG9ElefLrytCXzT6mbr0I41jI",
    authDomain: "e-valy.firebaseapp.com",
    projectId: "e-valy",
    storageBucket: "e-valy.appspot.com",
    messagingSenderId: "920367059626",
    appId: "1:920367059626:web:ef7cd5c805d2bb324076d3"
  };
  export default firebaseConfig;

  const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };

  