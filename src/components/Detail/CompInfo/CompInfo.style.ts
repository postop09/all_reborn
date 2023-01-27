import styled from "styled-components";

export const DataWrapper = styled.div`
  display: flex;
  margin-bottom: 4px;
  
  dt {
    flex: 1;
    color: ${({theme}) => theme.COLOR.secondOriginal};
  }
  dd {
    flex: 2;
  }
`