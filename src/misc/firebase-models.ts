import { 
  DocumentSnapshot, 
  Query,
  QueryDocumentSnapshot,
  OrderByDirection
} from '@firebase/firestore-types';

export type FireUser = firebase.User;
export type FireApp = firebase.app.App;

export type FireStorage = firebase.storage.Storage;
export type FireStorageReference = firebase.storage.Reference;
export type FireUploadTaskSnapshot = firebase.storage.UploadTaskSnapshot;
export type FireUploadTask = firebase.storage.UploadTask;
export type FireStoragePutFileResult = {
  task: FireUploadTask, 
  taskResult: Promise<FireUploadTaskSnapshot>,
  downloadUrl: Promise<string>,
}

export type FireAuth = firebase.auth.Auth;
export type FireAuthUserCredentials = firebase.auth.UserCredential;

export type FireStore = firebase.firestore.Firestore;
export type FireStoreBatch = firebase.firestore.WriteBatch;
export type FireStoreTimeStamp = firebase.firestore.FieldValue;
export type FireStoreDocumentRef = firebase.firestore.DocumentReference;
export type FireStoreDocumentSnapshot = DocumentSnapshot;
export type FireStoreCollectionRef = firebase.firestore.CollectionReference;
export type FireStoreQueryDocumentSnapshot = QueryDocumentSnapshot;
export type FireStoreQuery = Query;
export type FireStoreQueryOrder = OrderByDirection;
