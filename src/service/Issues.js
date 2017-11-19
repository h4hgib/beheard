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
    .limit(100);
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


BeHeardService.prototype.addComment = function(issueId,comment) {
  return firebase.firestore().collection('issues').doc(issueId).collection('comments').add(comment);
};

BeHeardService.prototype.getAllComments = function(issueId,loaded) {
  const query = firebase.firestore().collection(`issues/${issueId}/comments`)
    .orderBy('numVotes', 'desc');
   this._getDocumentsInQuery(query, loaded);
};



function updateCommentVoteCount(issueID, commentId) {
  const IssueRef = firebase.firestore().doc(`issues/${issueID}/comments/${commentId}`);
  const votesCollectionRef = firebase.firestore().collection(`issues/${issueID}/comments/${commentId}/votes`);

  return votesCollectionRef.onSnapshot(querySnapshot => {
    console.log(querySnapshot.size);
    return IssueRef.update({"numVotes": querySnapshot.size});
  });
}

BeHeardService.prototype.voteUpComment = function(issueID,commentID, userId) {

  const voteCommentDocRef = firebase.firestore().doc(`issues/${issueID}/comments/${commentID}/votes/${userId}`);
  voteCommentDocRef.set({vote:1, uid:userId});

  return updateCommentVoteCount(issueID, commentID);
};





BeHeardService.prototype.addRecording = function(issueId,recording) {
  return firebase.firestore().collection('issues').doc(issueId).collection('recordings').add(recording);
};

BeHeardService.prototype.getAllRecordings = function(issueId,loaded) {
  const query = firebase.firestore().collection(`issues/${issueId}/recordings`);
   this._getDocumentsInQuery(query, loaded);
};



BeHeardService.prototype.addReaction = function(issueId, userId, reaction) {
  const voteDocRef = firebase.firestore().doc(`issues/${issueId}/reactions/${userId}`);
  return voteDocRef.set({reaction:reaction});
};

BeHeardService.prototype.getAllReactions = function(issueId,loaded) {
  const query = firebase.firestore().collection(`issues/${issueId}/reactions`);
   this._getDocumentsInQuery(query, loaded);
};


BeHeardService.prototype.addReactionVoice = function (issueId, userId, data) {
  console.log("Adding: ", data);
  const voteDocRef = firebase.firestore().doc(`issues/${issueId}/recordings/${userId}`);
  return voteDocRef.set(data);
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

