import Chart from '@/components/Chart';
import DiaryModal from '@/components/DiaryModal';
import { BookOutlined, UpOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import { Affix, Button, Col, DatePicker, Form, List, Row, Select, Tooltip } from 'antd';
import dayjs from 'dayjs';
import React, { useCallback, useEffect, useState } from 'react';
import { dataDiaryDetailsMock, dataDiaryMock, dataExerciseMock } from './mockData';
import { StyledMyProfile } from './styled';

const Welcome: React.FC = () => {
  const date = dayjs().format('DD - MM - YYYY');
  const [dateValue, setDateValue] = useState(date);
  const [pickerType, setPickerType] = useState<any>('day');
  const [visible, setVisible] = useState(false);
  const [dataDiaryDetails, setDataDiaryDetails] = useState<any[]>([]);
  const [initLoading, setInitLoading] = useState(true);

  const pickerTypeChange = useCallback((value) => {
    setPickerType(value);
  }, []);

  const handleClickScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const onLoadMore = () => {
    console.log('dataDiaryDetails', dataDiaryDetails);
    setDataDiaryDetails([...dataDiaryDetails, ...dataDiaryDetailsMock]);
  };

  const loadMore = !initLoading ? (
    <div
      style={{
        textAlign: 'center',
        marginTop: 12,
        height: 56,
        lineHeight: '32px',
      }}
    >
      <Button onClick={onLoadMore} size="large">
        自分の日記をもっと見る
      </Button>
    </div>
  ) : null;

  useEffect(() => {
    //call api => response => setState
    setInitLoading(false);
    setDataDiaryDetails(dataDiaryDetailsMock);
  }, []);

  return (
    <StyledMyProfile>
      <PageContainer title={false}>
        <Row gutter={48} id="top-page">
          <Col span={8} className="recommend">
            <div className="padding">
              <div className="image image-1">
                <div className="text">
                  <p className="text-1">BODY RECORD</p>
                  <p className="text-2">
                    <Button onClick={() => handleClickScroll('body-record')}>
                      自分のカラダの記録
                    </Button>
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
                    <Button onClick={() => handleClickScroll('my-exercise')}>
                      自分の運動の記録
                    </Button>
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
                    <Button onClick={() => handleClickScroll('my-diary')}>自分の日記</Button>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row id="body-record" className="row-chart">
          <Row className="header">
            <Col span={4} style={{ marginTop: '5px' }}>
              BODY RECORD
            </Col>
            <Col span={4} style={{ fontSize: 24 }}>
              {dateValue}
            </Col>
            <Col span={1} offset={1}>
              <Tooltip title="DIARY">
                <BookOutlined
                  onClick={() => setVisible(true)}
                  style={{ marginTop: '5px', fontSize: 24 }}
                />
              </Tooltip>
            </Col>
            <Col span={4} offset={4}>
              <Form.Item label="Type">
                <Select defaultValue="day" onChange={(value) => pickerTypeChange(value)}>
                  <Select.Option value="day">Day</Select.Option>
                  <Select.Option value="week">Week</Select.Option>
                  <Select.Option value="month">Month</Select.Option>
                  <Select.Option value="year">Year</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={5} offset={1}>
              <DatePicker
                value={dateValue ? dayjs(dateValue, 'DD-MM-YYYY') : undefined}
                picker={pickerType}
                style={{ width: '100%' }}
                format={'DD-MM-YYYY'}
                onChange={(value) => setDateValue(dayjs(value).format('DD - MM - YYYY'))}
              />
            </Col>
          </Row>
          <div className="chart">
            <Chart type={pickerType} />
            <Affix className="btn-scroll" offsetTop={200} onChange={() => {}}>
              <Button
                type="primary"
                shape="circle"
                icon={<UpOutlined />}
                onClick={() => handleClickScroll('top-page')}
              />
            </Affix>
          </div>
        </Row>
        <Row id="my-exercise" className="row-exercise">
          <Row style={{ width: '100%' }}>
            <Col span={2} style={{ fontSize: 15 }}>
              MY EXERCISE
            </Col>
            <Col span={4} offset={1} style={{ fontSize: 22 }}>
              {dataExerciseMock.date}
            </Col>
          </Row>
          <List
            size="large"
            header={undefined}
            footer={undefined}
            bordered={false}
            dataSource={dataExerciseMock.exercises}
            renderItem={(item: any, index: number) => (
              <div
                className="list-items"
                style={index % 2 === 0 ? { marginRight: '2%' } : { marginLeft: '2%' }}
              >
                <List.Item>
                  <div style={{ display: 'flex', color: '#fff' }}>
                    <div style={{ fontSize: 5, marginTop: 8 }}>●</div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ fontSize: 15 }}>{item.name}</div>
                      <div style={{ color: '#FFCC21', fontSize: 15 }}>{item.burn}</div>
                    </div>
                  </div>
                  <div style={{ color: '#FFCC21', fontSize: 18, marginTop: -10 }}>{item.time}</div>
                </List.Item>
              </div>
            )}
          />
        </Row>
        <Row id="my-diary" className="row-diary" gutter={16}>
          <Col span={24} className="header">
            MY DIARY
          </Col>
          {dataDiaryDetails &&
            dataDiaryDetails.map((item: any, index: number) => {
              return (
                <Col span={6} style={{ marginBottom: 20 }} key={index}>
                  <div className="diary-item">
                    <div style={{ fontSize: 18, fontWeight: 400 }}>{item.date}</div>
                    <div style={{ fontSize: 18, fontWeight: 400 }}>{item.time}</div>
                    <div style={{ marginTop: 8 }}>{item.titel}</div>
                    <div>{item.content}</div>
                  </div>
                </Col>
              );
            })}
          <Col span={24}>{loadMore}</Col>
        </Row>
        <DiaryModal
          visible={visible}
          dataDiary={{ ...dataDiaryMock, date: dateValue }}
          onCancel={() => setVisible(false)}
          onOk={() => setVisible(false)}
        />
      </PageContainer>
    </StyledMyProfile>
  );
};

export default Welcome;
