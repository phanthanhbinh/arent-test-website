// import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
// import { useIntl } from '@umijs/max';
import React from 'react';
import { StyledFooter } from './styled';

const Footer: React.FC = () => {
  // const intl = useIntl();
  // const defaultMessage = intl.formatMessage({
  //   id: 'app.copyright.produced',
  //   defaultMessage: '蚂蚁集团体验技术部出品',
  // });

  // const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <DefaultFooter
        style={{
          background: 'none',
        }}
        copyright={undefined}
        links={[
          {
            key: '会員登録',
            title: '会員登録',
            href: '#',
            blankTarget: true,
          },
          {
            key: '運営会社',
            title: '運営会社',
            href: '#',
            blankTarget: true,
          },
          {
            key: '利用規約',
            title: '利用規約',
            href: '#',
            blankTarget: true,
          },
          {
            key: '個人情報の取扱について',
            title: '個人情報の取扱について',
            href: '#',
            blankTarget: true,
          },
          {
            key: '特定商取引法に基づく表記',
            title: '特定商取引法に基づく表記',
            href: '#',
            blankTarget: true,
          },
          {
            key: 'お問い合わせ',
            title: 'お問い合わせ',
            href: '#',
            blankTarget: true,
          }
        ]}
      />
    </StyledFooter>
  );
};

export default Footer;
