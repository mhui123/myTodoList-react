import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
    width:  512px;
    height: 768px;

    position: relative; /*하단에 추가버튼 배치하기 위한 반응형*/
    background: white;
    border-radius:  16px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0.04);

    margin: 0 auto; /*페이지 중앙에 표기*/

    margin-top: 96px;
    margin-bottom: 32px;
    display:    flex;
    flex-direction: column;

`;

function TodoTemplate({children}){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate