import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google
    const signInWithGoogle = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            setUser(result.user)
        })
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }

   //github
    const signInWithGithub = () => {
        setIsLoading(true);
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user)
            })

            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])



   //log-out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { 
                setUser({})
            })
                
            .finally(() => setIsLoading(false));
            
    }


    return {
        user,
        isLoading,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    }
};

export default useFirebase;