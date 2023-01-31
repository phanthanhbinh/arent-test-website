import styled from 'styled-components';

export const StyledMyProfile = styled.div`
  .recommend {
    .padding {
      width: 100%;
      padding: 24px;
      background-color: #ffcc21;

      .image {
        position: relative;
        display: grid;
        height: 300px;
        color: #ffcc21;
        place-items: center;
      }
      .image::before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        filter: grayscale(100%);
        content: '';
      }
      .text {
        position: relative;
        .text-1 {
          font-weight: 400;
          font-size: 25px;
          text-align: center;
        }
      }

      .image-1::before {
        background-image: url('images/MyRecommend-1.jpg');
      }
      .image-2::before {
        background-image: url('images/MyRecommend-2.jpg');
        background-position-x: 20%;
      }
      .image-3::before {
        background-image: url('images/MyRecommend-3.jpg');
        background-position-x: 50%;
      }
    }
    .ant-btn-default {
      color: #fff;
      background-color: #ff963c;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
  }

  .row-chart {
    margin-top: 30px;
    padding: 20px;
    color: #fff;
    background-color: #414141;
    .header {
      width: 100%;
      .ant-form-item .ant-form-item-label > label {
        color: #fff !important;
      }
    }
    .chart {
      position: relative;
      width: 100%;
      margin-top: 30px;
      .btn-scroll {
        position: absolute;
        right: -70px;
      }
    }
  }
  .row-exercise {
    width: 100%;
    margin-top: 30px;
    padding: 20px;
    color: #fff;
    background-color: #414141;
    .ant-list {
      width: 100%;
      height: 300px;
      overflow: scroll;
      .list-items {
        display: inline-block;
        width: 48%;
        border-block-end: solid 1px #777777;
      }
    }
  }

  .row-diary {
    margin-top: 30px;
    color: #414141;
    .header {
      width: 100%;
      margin-bottom: 12px;
      font-weight: 400;
      font-size: 22px;
    }
    .diary-item {
      padding: 16px;
      border: solid 1px #707070;
    }
    .ant-btn-default {
      color: #fff;
      background: linear-gradient(32.95deg, #ffcc21 8.75%, #ff963c 86.64%);
      border: none;
      border-radius: 4px;
      box-shadow: none;
    }
  }
`;
