import React, { useState, useEffect } from 'react';

import { api } from "../../services/api";

import * as S from './styles';

const Main = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api.get().then(response => setList(response.data))
    },[])

    return (
        <S.Container>
            {list.slice(0,20).map((item, i) =>(
                <S.Box key={i}>
                    <S.Text>{item.name}</S.Text>
                    <S.Image src={item.image} alt="" />
                    <S.Text>{item.actor}</S.Text>
                </S.Box>
            ))}
        </S.Container>
    )
}

export default Main;