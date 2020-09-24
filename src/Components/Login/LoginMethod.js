import * as firebase from "firebase/app";
import "firebase/auth";

export const EmailLogin=(email,password)=>{

   return  firebase.auth().signInWithEmailAndPassword(email, password)
   .then(result=>{
        return result;
   })
    .catch(function(error) {
         
        
        return error.message;
         
      });
}

export const GoogleLogin=()=>{
  
    var provider = new firebase.auth.GoogleAuthProvider();
   return  firebase.auth().signInWithPopup(provider)
    .then(result=>{
                
        return result
      }).catch(function(error) {
        return error.message;

      });
}


