import firebase from 'firebase/app';
import 'firebase/firestore';

const CONFIG = {
  apiKey: "AIzaSyAihQPKDcizE9kvK9Mmg8RYAELWvczc2fs",
  authDomain: "foods-app-pasha.firebaseapp.com",
  projectId: "foods-app-pasha",
  storageBucket: "foods-app-pasha.appspot.com",
  messagingSenderId: "460271667048",
  appId: "1:460271667048:web:4f32641e6cebd09f7bb8dd",
  measurementId: "G-RJ0TSNN5H8"
};

firebase.initializeApp(CONFIG);

export const FIRE_STORE = firebase.firestore();

export const addCollectionAndDocomentsInFireStore = async (collection, addDocuments) => {
  const collectionRef = FIRE_STORE.collection(collection);
  
  const batch = FIRE_STORE.batch();

  addDocuments.forEach( item => {
    const createItemRefInFireStore = collectionRef.doc();

    batch.set(createItemRefInFireStore, item);
  });
  
  return await batch.commit();
};

export const converCollectionFromFireStore = (snapShotCollection) => {
  const converGetedCollection = snapShotCollection.docs.map( item => {
    const{category, desc, img, price, title} = item.data();

    return {
      id: item.id,
      title,
      category,
      img,
      price,
      desc
    };
  });

  return converGetedCollection;
}

export const getCollectionSnapShotFromFireStore = () => {
  return new Promise((resolve, reject) => {
    const collectionRef = FIRE_STORE.collection('collection');
    const snapShotCollection = collectionRef.get();

    snapShotCollection.then((snapShot) => {
      resolve(snapShot);
    }, reject)
  });
};


