import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


function Home() {
    return (
<div>
       <Link to="/"> 
       <Button
       
       variant="contained"
       size="large"
       color="primary"> Go to SignIn</Button>
      </Link>
        </div>
    );
}
export default Home;











// export interface IHomepageProps {};

// const HomePage: React.FunctionComponent<IHomepageProps> = (props) => {
//     return <div>
//        <Link to="SignIn"> 
//        <Button> Conectează-te</Button>
//       </Link>
//         </div>
// };
// export default HomePage;