// import firebase from 'firebase';
import * as firebase from 'firebase'

require('firebase/firestore');

function BeHeardService() {

}

BeHeardService.prototype.addIssue = function (data) {
  console.log("Adding: ", data)
  const collection = firebase.firestore().collection('issues');
  return collection.add(data);
};

BeHeardService.prototype.getIssue = function (id) {
  return firebase.firestore().collection('issues').doc(id).get();
};

BeHeardService.prototype._withId = function (doc) {
  return {...doc.data(), id:doc.id};
}

BeHeardService.prototype.getAllIssues = function (render) {
  const query = firebase.firestore()
    .collection('issues')
    .orderBy('numVotes', 'desc')
    .limit(50);
  this._getDocumentsInQuery(query, render);
};

BeHeardService.prototype._getDocumentsInQuery = function (query, render) {
  query.onSnapshot(snapshot => {

    let docs = [];

    snapshot.docs.forEach(doc => {
          let data = doc.data();
          data.id = doc.id;
          docs.push(data);
    });

    if (docs.length > 0) return render(docs);

  });
};





function updateVoteCount(issueID) {
  const IssueRef = firebase.firestore().doc(`issues/${issueID}`);
  const votesCollectionRef = firebase.firestore().collection(`issues/${issueID}/votes`);

  return votesCollectionRef.onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    return IssueRef.update({"numVotes": querySnapshot.size});
  });
}

BeHeardService.prototype.voteUp = function(issueID,userId) {

  const voteDocRef = firebase.firestore().doc(`issues/${issueID}/votes/${userId}`);
  voteDocRef.set({vote:1});

  return updateVoteCount(issueID);
};






BeHeardService.prototype.addReactionVoice = function (issueId, data) {
  console.log("Adding: ", data)
  const collection = firebase.firestore().collection('issues').doc(issueId).collection('recordings');
  return collection.add(data);
};


BeHeardService.prototype.getAllVoiceReactions = function (issueId, render) {
  const query = firebase.firestore()
    .collection('issues').doc(issueId).collection('recordings')
    // .orderBy('avgRating', 'desc')
    .limit(50);
  this._getDocumentsInQuery(query, render);
};

const BH = new BeHeardService();

export default BH;

