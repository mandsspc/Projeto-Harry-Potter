import React from 'react'

import * as S from './styles';

import Logo from '../../assets/Logo-Amarelo-Harry-Potter-PNG-1024x343.png';

const Nav = () => {
  return (
    <S.Wrapper> 
      <S.Image src={Logo} />
        <S.BoxLink>
          <S.LinkRota to="/gallery">
            Galeria
          </S.LinkRota>
          <S.LinkRota to="/history">
            História
          </S.LinkRota>
        </S.BoxLink>
  </S.Wrapper> 
  )
}

export default Nav;