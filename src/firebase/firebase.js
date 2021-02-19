import firebase from "firebase/app";
import "firebase/firestore";

const CONFIG = {
  apiKey: "AIzaSyAihQPKDcizE9kvK9Mmg8RYAELWvczc2fs",
  authDomain: "foods-app-pasha.firebaseapp.com",
  projectId: "foods-app-pasha",
  storageBucket: "foods-app-pasha.appspot.com",
  messagingSenderId: "460271667048",
  appId: "1:460271667048:web:4f32641e6cebd09f7bb8dd",
  measurementId: "G-RJ0TSNN5H8",
};

firebase.initializeApp(CONFIG);

export const FIRE_STORE = firebase.firestore();

export const addCollectionInFireStore = async (collection, documents) => {
  const collectionRef = FIRE_STORE.collection(collection);

  const batch = FIRE_STORE.batch();

  documents.forEach((item) => {
    const createItemRefInFireStore = collectionRef.doc();

    batch.set(createItemRefInFireStore, item);
  });

  return batch.commit();
};

export const transformCollectionFromFireStore = (snapShotCollection) => {
  const transformCollection = snapShotCollection.docs.map((item) => {
    const { category, desc, img, price, title } = item.data();

    return {
      id: item.id,
      title,
      category,
      img,
      price,
      desc,
    };
  });

  return transformCollection;
};

export const getCollectionSnapShotFromFireStore = () => (
  new Promise((resolve, reject) => {
    const collectionRef = FIRE_STORE.collection("collection");
    const snapShotCollection = collectionRef.get();

    snapShotCollection.then((snapShot) => {
      resolve(snapShot);
    }, reject);
  })
);
