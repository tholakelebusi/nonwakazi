
    



    const  firebaseConfig = {
    apiKey: "AIzaSyBYegeGq9K4E1VvBvhMiL1_2-aKuzLW0BY",
  authDomain: "nonzwakazusers.firebaseapp.com",
  projectId: "nonzwakazusers",
  storageBucket: "nonzwakazusers.appspot.com",
  messagingSenderId: "516010842726",
  appId: "1:516010842726:web:86ef0e46a744af0fe02ba7",
  measurementId: "G-C5FLSLJD68"
        };
 
        
        const app = initializeApp(firebaseConfig);
        
        var messagesRef = firebase.database()
            .ref('Collected Data');
         
        document.getElementById('contactForm')
            .addEventListener('submit', submitForm);
 
        function submitForm(e) {
            e.preventDefault();
 
            // Get values
            var name = getInputVal('name');
            var email = getInputVal('email');
 
            saveMessage(name, email);
            document.getElementById('contactForm').reset();
        }
 
        // Function to get get form values
        function getInputVal(id) {
            return document.getElementById(id).value;
        }
 
        // Save message to firebase
        function saveMessage(name, email) {
            var newMessageRef = messagesRef.push();
            newMessageRef.set({
                name: name,
                email: email,
            });
        }
