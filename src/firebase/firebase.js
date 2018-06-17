import * as firebase from 'firebase';


// Initialize Firebase
var config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };























// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses)
//   });



// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((data) => {
//     expenses.push({
//       id: data.key,
//       ...data.val()
//     })
//   })
//   console.log(expenses);
// })

// // child_removed

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').push({
//   description: 'Coffee',
//   note: 'Long Black from Three Bags Full',
//   amount: 450,
//   createdAt: 'Aug 2, 2018'
// })



// // database.ref('notes').push({
//   //   title: 'Course Topics',
//   //   body: '`React Native, Python, Amazon WS`'
//   // })
  
  
//   // database.ref('notes/-LEpho5fxgUXg9pCEe-8').remove();

// // const firebaseNotes = {
// //   notes: {
// //     aidasfaf: {
// //       title: 'First Note',
//       body: 'This is my note'
//     },
//     awfsdfd: {
//       title: 'Second Note',
//       body: 'This is my note'
//     } 
//   }
// }


// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: '124rwfs',
//   title: 'Second Note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(notes);


// database.ref('notes/12')



// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title} at ${data.job.company}.`)
// }, (e) => {
//   console.log('Error fetching data', e)
// })



// setTimeout(() => {
//   database.ref().update({
//     'job/title': ' Senior Software Engineer'
//   })
// }, 3500)


// const onValueChange = database.ref().on('value', (snapshot) => {
  //     console.log(snapshot.val())
//   }, (e) => {
  //     console.log('Error with data fetching', e)
//   });



// setTimeout(() => {
//   database.ref('age').set(30)
// }, 3500)
// setTimeout(() => {
//   database.ref().off('value', onValueChange)
// }, 7000)
// setTimeout(() => {
//   database.ref('age').set(32)
// }, 10500)









// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) =>{
//     console.log('Error fetching data', e)
//   })




// database.ref().set({
//   name: 'Andy Smith',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Melbourne',
//     country: 'Australia'
//   }
// }).then(() => {
//   console.log('data is saved!')
// }).catch((e) => {
//   console.log('This failed.', e)
// });



// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// })







// database.ref('isSingle').set(null);

// database.ref().set('This is my data');

// database.ref('age').set(31);
// database.ref('location/city').set('Bali');

// database.ref('attributes').set({
//   height: 173,
//   weight: 71
// }).then(() => {
//   console.log('height and weight updated')
// }).catch(() => {
//   console.log('This failed:', e)
// })


// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data Removed')
//   }).catch((e) =>{
//     console.log('This failed. ', e)
//   });
