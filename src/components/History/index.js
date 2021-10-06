import React from 'react'

import * as S from './styles';

import Logo from '../../assets/Logo-Amarelo-Harry-Potter-PNG-1024x343.png';

const HistoryHarryPotter = () => {
  return (
    <div>
    <S.Wrapper> 
        <S.Image src={Logo} />
        <S.BoxLink>
        <S.LinkRota to="/">
            Voltar
        </S.LinkRota>
        </S.BoxLink>
    </S.Wrapper> 
    <S.BoxText>
        <S.Text>
            Harry Potter (1980) é um personagem fictício criado pela escritora britânica J.K. Rowling. Formada por sete livros, a série fascinou milhares de leitores por todo o mundo, vendeu milhares de livros e foi adaptada para o cinema com enorme sucesso de bilheteria. Cada livro narra um ano da vida do pequeno bruxo, dos 11 aos 17 anos, quando frequentou a escola de bruxos "Hogwarts".
            Harry James Potter é filho único de Tiago Potter e Lílian Potter. Foi o sobrevivente da maldição do bruxo "Lord Voldemort", que tentou matá-lo ainda bebê. Seus pais foram mortos pelo bruxo, mas Harry sobreviveu, adquirindo uma cicatriz no rosto.
            Harry Potter foi morar com os "Dursley", família que ignorava os fenômenos sobrenaturais. Harry descobre que é um mago através do guarda florestal de "Hogwarts", que o levou para morar na casa "Grifinória" - uma das quatro casas na época da inauguração da escola dos bruxos.
            O primeiro livro "Harry Potter e a Pedra Filosofal" relata seu primeiro ano na escola "Hogwarts" - local onde existia um internato de magia para bruxos, e lá se envolveu com o esporte "quadribol". Durante o primeiro ano, "Voldemort", o bruxo, se empenha para adquirir a pedra filosofal que Harry tenta protegê-la.
            No segundo livro "Harry Potter e a Câmara Secreta" - o bruxo usou "Gina Weasley" para libertar de suas "horcruxes" - objeto mágico no qual é inserido o poder de um feiticeiro, escondidas num diário. Harry é culpado pelos ataques aos alunos, mas é inocentado depois de sua luta com "Vandemort".
            No terceiro livro "Harry Potter e o Prisioneiro de Azkaban" algumas verdades, que são descobertas por Harry, dão a tônica da história, assim como algumas revelações sobre o seu padrinho "Sirius Black" e de alguns amigos de seus pais.
            No quarto livro "Harry Potter e o Cálice de Fofo", Harry enfrenta os desafios do torneio "Tribuxo" e luta cara a cara com "Vandemort".
            No quinto livro "Herry Potter e a Ordem de Fénix" acontece a luta entre os comensais da morte da Fênix e membros de "Dumbledore" - feiticeiro do bem. Neste conflito, acontece a morte de seu padrinho "Sirius".
            No sexto livro "Harry Potter e o Enigma do Príncipe", Harry se mostra apaixonado por "Gina Weasley" e "Dumbledore" morre nas mãos de seu aluno "Snape".
            No sétimo livro "Harry Potter e as Relíquias da Morte", seu sétimo ano na escola, Harry encontra e destrói as "Horcruxes" que faltavam e descobre fatos sobre "Dumbledore" e as relíquias da morte. Nesse capítulo, finalmente Harry consegue matar "Lord Voldemort". No epílogo, depois de quase 20 anos, Harry já com 3 filhos, leva Gina à plataforma 9 ¾. Torna-se "Auror", uma profissão na qual era encarregado de atuar como um agente no combate aos bruxos do mal.
        </S.Text>
    </S.BoxText>
  </div>
  )
}

export default HistoryHarryPotter;