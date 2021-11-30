import {FC} from "react";
import {Col, Row} from "react-bootstrap";
import styles from './repo.module.scss'
import {IRepos} from "../../../../../interfaces/user/repos";

interface IRepoProps {
    oneRepos: IRepos
}

export const Repo: FC<IRepoProps> = ({oneRepos}) => {

    return (
        <a href={oneRepos.html_url}>
            <Row className={'align-items-center'}>
                <Col md={{span: 8, offset: 2}}>
                    <div className={styles.repo}>
                        <p>
                            {oneRepos.name}
                        </p>
                        <div className={styles.wrap}>
                            <p>
                                Stars - {oneRepos.stargazers_count}
                            </p>
                            <p>
                                Forks - {oneRepos.forks_count}
                            </p>
                        </div>
                    </div>
                    <hr/>
                </Col>
            </Row>
        </a>
    )
}