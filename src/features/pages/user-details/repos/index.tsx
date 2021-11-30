import {FC, useEffect, useState} from "react";
import {fetchUsersRepos} from "../user-details-Slice";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {useParams} from "react-router-dom";
import {Repo} from "./repo";
import {Col, Row} from "react-bootstrap";

export const Repos: FC = () => {
    //Interfaces
    interface IParamTypes {
        id: string
    }

    const dispatch = useAppDispatch()
    const {id} = useParams<IParamTypes>()

    //Get from store for local use
    const {userDetailsPage: {repos}} = useAppSelector(store => store)

    //Get user repos
    useEffect(() => {
        dispatch(fetchUsersRepos(+id))
    }, [])

    //Local input state
    const [inputValue, setInputValue] = useState('');

    return (
        <>
            <Row className={'text-center'}>
                <Col md={{span: 8, offset: 2}}>
                    <input type="text"
                           name={'reposSearch'}
                           placeholder={'Search for Users Repositories'}
                           value={inputValue}
                           onChange={({target: {value}}) => setInputValue(value)}/>
                </Col>
            </Row>
            {!repos.length &&
            <Row>
                <Col className={'text-center'}>
                    <h2>Is Loading..</h2>
                </Col>
            </Row>
            }
            {repos
                .filter(repo => repo.name.startsWith(inputValue))
                .map(repo => <Repo key={repo.id} oneRepos={repo}/>)}
        </>
    )
}