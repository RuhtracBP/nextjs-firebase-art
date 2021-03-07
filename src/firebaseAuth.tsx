import {
    FunctionComponent,
    useState,
    useEffect
} from 'react';
import  StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "./initFirebase"

const firebaseAuthConfig = {
    signInFlow: "popup",
    signInOptions: [
        {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false,
        },
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        },
    ],
    signInSuccessUrl: "/",
};

const FirebaseAuth: FunctionComponent = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);          //this garantee that this is CSR because useEffect only runs after the page render (only in client side)
    }, [])

    return (
        <div>
            {show && (
                <StyledFirebaseAuth 
                    uiConfig={firebaseAuthConfig} 
                    firebaseAuth={firebase.auth()}
                />
            )}
        </div>
    );
};

export default FirebaseAuth;