import styled from "styled-components";

export const StyledMyProfile = styled.div`
  .recommend {
    .padding {
      width: 100%;
      padding: 24px;
      background-color: #FFCC21;

      .image {
        height: 300px;
        display: grid;
        place-items: center;
        color: #FFCC21;
        position: relative;
      }
      .image::before {
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        background-size: cover;
        filter: grayscale(100%);
      }
      .text {
        position: relative;
        .text-1 {
          text-align: center;
          font-size: 25px;
          font-weight: 400;
        }
      }

      .image-1::before {
        background-image: url("images/MyRecommend-1.jpg");
      }
      .image-2::before {
        background-image: url("images/MyRecommend-2.jpg");
        background-position-x: 20%;
      }
      .image-3::before {
        background-image: url("images/MyRecommend-3.jpg");
        background-position-x: 50%;
      }
    }
    .ant-btn-default {
      background-color: #FF963C;
      color: #fff;
      border: none;
      box-shadow: none;
      border-radius: 0;
    }
  }
  
  
`;
