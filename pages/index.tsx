import FirebaseAuth from "../src/firebaseAuth";
import { useAuth } from '../src/authProvider';


export default function Home() {

  const { user, loading, logout } = useAuth();

  if(loading) return null;  //change to a spinner?

  if(!user) return <FirebaseAuth />;

  return (
    <main>
      <button type="button" onClick={logout} className="link" >
        LougOut
      </button>
    </main>
  )
}
