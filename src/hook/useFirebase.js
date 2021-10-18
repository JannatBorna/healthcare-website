import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] =useState('');

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
            .catch(error => {
                setError(error.message);
            })
    }

   //github
    const signInWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch(error => {
                setError(error.message);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        });
    }, [])



   //log-out
    const logOut = () => {
        signOut(auth)
            .then(() => { 
                setUser({});
            })
    }


    return {
        user,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    }
};

export default useFirebase;