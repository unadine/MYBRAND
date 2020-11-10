// Your web app's Firebase configuration
          // For Firebase JS SDK v7.20.0 and later, measurementId is optional
          var firebaseConfig = {
            apiKey: "AIzaSyC066OV8Sa9h7sbEQh8FVi9fcR3D3-al7E",
            authDomain: "mybrand-d5cdf.firebaseapp.com",
            databaseURL: "https://mybrand-d5cdf.firebaseio.com",
            projectId: "mybrand-d5cdf",
            storageBucket: "mybrand-d5cdf.appspot.com",
            messagingSenderId: "735253465583",
            appId: "1:735253465583:web:a1bde314f8da04c017ce1a",
            measurementId: "G-8GSR3TPZGL"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          const db= firebase.firestore();
          db.settings = ({timestampsInSnapshots:true});