import {FC} from "react";
import {IUser} from "../../../../interfaces/user/user";
import {Link} from 'react-router-dom'
import styles from './oneUser.module.scss'
import {Col, Row} from "react-bootstrap";

interface IOneUserProps {
    user: IUser
}

export const OneUser: FC<IOneUserProps> = ({user}) => {
    return (
        <Row>
            <Col md={{span: 8, offset: 2}}>
                <div className={styles.wrap}>
                    <Link to={'/user/' + user.id}>
                        <img src={user.avatar_url} alt={user.name}/>
                    </Link>
                    <p>{user.name}</p>
                    <p>Repo {user.public_repos}</p>
                </div>
            </Col>
        </Row>
    )
}