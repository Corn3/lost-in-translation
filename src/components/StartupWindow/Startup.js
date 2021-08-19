import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getStorage } from '../../storage';
const Startup = () => {

    const history = useHistory();

    useEffect(() => {
        if(!getStorage("username")) {
            history.push("/login");
        } else {
            history.push("/translation");
        }
    })

    return (
        
        <div className="Startup">
            
        </div>

    
    );
}

export default Startup;