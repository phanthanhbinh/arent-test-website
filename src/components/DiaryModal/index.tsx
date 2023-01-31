import { List, Modal } from 'antd';
import { ModalStyled } from './modal-styled';

type DiaryModalProps = {
  visible: boolean;
  dataDiary: any;
  onCancel: () => void;
  onOk: (diary: any) => void;
};

const DiaryModal: React.FC<DiaryModalProps> = (props: DiaryModalProps) => {
  const { visible, dataDiary, onCancel, onOk } = props;

  return (
    <Modal
      onCancel={onCancel}
      onOk={(data: any) => onOk(data)}
      visible={visible}
      centered
      okText="Save"
      cancelText="Cancel"
      title={`My Diary ${dataDiary.date}`}
      width={600}
    >
      <ModalStyled>
        <List
          size="large"
          header={undefined}
          footer={undefined}
          bordered={false}
          dataSource={dataDiary.logs}
          renderItem={(item: any) => (
            <List.Item>
              {item.time}: {item.action}
            </List.Item>
          )}
        />
      </ModalStyled>
    </Modal>
  );
};

export default DiaryModal;
