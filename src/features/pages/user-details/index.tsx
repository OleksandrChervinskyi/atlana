import {FC, useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {fetchUserById} from "./user-details-Slice";
import styles from './user-details.module.scss'
import {Col, Container, Row} from "react-bootstrap";
import {Repos} from "./repos";


export const UserDetails: FC = () => {
    //Interfaces
    interface IParamTypes {
        id: string
    }

    const dispatch = useAppDispatch()
    const {id} = useParams<IParamTypes>()

    //Get from store for local use
    const {userDetailsPage: {user}} = useAppSelector(store => store)

    //Get user info
    useEffect(() => {
        dispatch(fetchUserById(+id))
    }, [])

    //Inp
    return (
        <Container>
            {!user && <h2>Is loading..</h2>}
            {user &&
            <div className={styles.section}>
                <Row className={'align-items-center'}>
                    <Col md={5}>
                        <img src={user.avatar_url} alt={user.login}/>
                    </Col>
                    <Col md={7}>
                        <div className={styles.description}>
                            <p>
                                Name - {user.name}
                            </p>
                            <p>
                                Email - {user.email}
                            </p>
                            <p>
                                Location - {user.location}
                            </p>
                            <p>
                                Join in - {user.created_at}
                            </p>
                            <p>
                                Followers - {user.followers}
                            </p>
                            <p>
                                Following - {user.following}
                            </p>
                        </div>
                    </Col>
                </Row>
                <Repos/>
            </div>}
        </Container>
    )
}