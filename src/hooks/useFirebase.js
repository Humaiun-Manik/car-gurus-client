import { useEffect, useState } from "react";
import initializefirebase from "./../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";

initializefirebase();

const provider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const path = useNavigate();

    const registerUser = (email, password, name) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                path('/dashboard');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };

    const loginUser = (email, password, redirect_url) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                path(redirect_url);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        fetch(`https://glacial-ridge-81046.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unSubscribed;
    }, []);

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://glacial-ridge-81046.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        admin,
        registerUser,
        signInWithGoogle,
        loginUser,
        saveUser,
        logOut,
        isLoading,
        error
    }
}

export default useFirebase;