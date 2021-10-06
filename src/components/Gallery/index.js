import React, { useState, useEffect } from 'react';

import { api } from "../../services/api";

import * as S from './styles';

const ItemGallery = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        api.get().then(response => setList(response.data))
    },[])

    return (
        <S.BoxAll>
            <S.LinkRota to="/">
                Voltar
            </S.LinkRota>
            <S.Container>
                {list.slice(0,20).map((item, i) =>(
                    <S.Box key={i}>
                        <S.Image src={item.image} alt="" />
                    </S.Box>
                ))}
            </S.Container>
        </S.BoxAll>
    )
}

export default ItemGallery;