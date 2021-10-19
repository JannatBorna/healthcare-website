import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, signOut } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // google
    const signInWithGoogle = () => {
        setIsLoading(true);
         return signInWithPopup(auth, googleProvider)
        
            .finally(() => setIsLoading(false))
            .catch(error => {
                setError(error.message);
            })
    }

    

   //github
    const signInWithGithub = () => {
        setIsLoading(true);
       return signInWithPopup(auth, githubProvider)
            .finally(() => setIsLoading(false))

            
            
    }


    //email & password

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
        
    }

    const handleRegistration = e => {
        e.preventDefault();

        
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        
        if (isLogin) {
            processLogin(email, password);
        }
        else {
            registerNewUser(email, password)
        }
    }
   

    //process login
    const processLogin = (email, password) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            

    }

    const registerNewUser = (email, password) => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('');
                verifyEmail();
                setUserName();
            })

            
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }


    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then(result => {

            })
    }

//auth state changed
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
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        toggleLogin,
        handleResetPassword,
        error,
        logOut,
    }
};

export default useFirebase;