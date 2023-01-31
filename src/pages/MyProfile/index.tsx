import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Button, Col, Row } from 'antd';
import React from 'react';
import { StyledMyProfile } from './styled';



const Welcome: React.FC = () => {
  // const { initialState } = useModel('@@initialState');
  return (
    <StyledMyProfile>
      <PageContainer title={false}>
        <Row gutter={48}>
          <Col span={8} className="recommend">
            <div className="padding">
              <div className="image image-1">
                <div className="text">
                  <p className="text-1">BODY RECORD</p>
                  <p className="text-2">
                    <Button>自分のカラダの記録</Button>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8} className="recommend">
            <div className="padding">
              <div className="image image-2">
                <div className="text">
                  <p className="text-1">MY EXERCISE</p>
                  <p className="text-2">
                    <Button>自分の運動の記録</Button>
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col span={8} className="recommend">
            <div className="padding">
              <div className="image image-3">
                <div className="text">
                  <p className="text-1">MY DIARY</p>
                  <p className="text-2">
                    <Button>自分の日記</Button>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </PageContainer>
    </StyledMyProfile>
  );
};

export default Welcome;
