import styles from '../styles/EOM.module.css';
import {Toolbar} from '../components/toolbar';
import data from '../data';
export const EOM = ({employee}) => {
    return(
        <div className="page-container">
            <Toolbar />
            <div className={styles.main}>
                <h1>Creator</h1>
                <div className={styles.employeeOfTheMonth}>
                    <h3>{data.name}</h3>
                    <h6>{data.profession}</h6>
                    <img src={data.image} alt=""/>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
};

// export const getServerSideProps = async pageContext => {
//     const apiResponse = await fetch(
//         'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
//     );

//     const employee = await apiResponse.json();

//     return {
//         props: {
//             employee
//         }
//     }
// }

export default EOM;