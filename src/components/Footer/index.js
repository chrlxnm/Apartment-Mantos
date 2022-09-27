import { Layout } from 'antd';
import React from 'react';

const { Footer } = Layout;
const FooterComponent = () => {
    return (
        <Footer
          style={{
            textAlign: "center",
            backgroundColor: "#001529",
            color: "#ffffff",
          }}
        >
          Apartment Management System ©2022 Created by Kelompok Mantos
        </Footer>
    );
};

export default FooterComponent;