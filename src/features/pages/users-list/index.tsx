import React, {FC, useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Search} from "./search";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {OneUser} from "./oneUser";
import {IUser} from "../../../interfaces/user/user";
import {fetchUser} from "./user-list-Slice";

export const UsersList: FC = () => {

    const dispatch = useAppDispatch()

    const {usersListPage: {search: {searchInput}}} = useAppSelector(store => store)
    const {usersListPage: {users: {users}}} = useAppSelector(store => store)

    useEffect(() => {
        return () => {
            dispatch(fetchUser(searchInput))
        };
    }, [searchInput]);

    return (
        <Container>
            <Row>
                <Col md={{span: 8, offset: 2}} className={'text-center'}>
                    <Search/>

                    {!users.length && <h2>Empty..</h2>}
                    {users
                        .slice()
                        .reverse()
                        .map((user: IUser) => <OneUser key={user.id} user={user}/>)
                    }
                </Col>
            </Row>
        </Container>
    )
}
