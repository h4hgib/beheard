// import firebase from 'firebase';
import * as firebase from 'firebase'

require('firebase/firestore');

function BHService() {

}

BHService.prototype.addIssue = function (data) {
  const collection = firebase.firestore().collection('issues');
  return collection.add(data);
};

BHService.prototype.getIssue = function (id) {
  return firebase.firestore().collection('issues').doc(id).get();
};


BHService.prototype.getAllIssues = function (render) {
  const query = firebase.firestore()
    .collection('issues')
    // .orderBy('avgRating', 'desc')
    .limit(50);
  this.getDocumentsInQuery(query, render);
};

BHService.prototype.getDocumentsInQuery = function (query, render) {
  query.onSnapshot(snapshot => {

    let docs = [];

    snapshot.docChanges.forEach(change => {
      if (change.type === 'added') {

        // console.log(change.doc);

        let data = change.doc.data();
        data.id = change.doc.id;
        docs.push(data);
      }
    });

    return render(docs);

  });
};


export default BHService;