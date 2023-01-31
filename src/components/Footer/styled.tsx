import styled from "styled-components";

export const StyledFooter = styled.div`
  background-color: #414141;
  height: 110px;
  .ant-pro-global-footer-copyright {
    display: none;
  }
  .ant-pro-global-footer-list *:not(:last-child) {
    margin-inline-end: 60px;
  }
  .ant-pro-global-footer-list-link {
    color: #fff;
  }
`;
