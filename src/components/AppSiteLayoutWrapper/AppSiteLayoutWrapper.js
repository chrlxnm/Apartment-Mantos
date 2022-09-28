import { AppContentWrapper, AppFooter, AppFooterWrapper } from '../AppContentWrapper/style';
import { Avatar, Layout } from 'antd';

import { AppHeaderWrapper } from './style';

// import logoCB from "../../assets/images/cb-logo.svg";

const AppSiteLayoutWrapper = ({ children }) => {
    return (
        <Layout>
            <AppHeaderWrapper> 
                <Avatar size={64} src="https://joeschmoe.io/api/v1/random" />
            </AppHeaderWrapper>
            <AppContentWrapper>
                {children}
            </AppContentWrapper>
        </Layout>
    )
}

export default AppSiteLayoutWrapper;
