import { AppLoadingWrapper } from './style';
import loading from '../../assets/gif/loading.gif';
import { useSelector } from 'react-redux';

const AppLoadingProvider = (props) => {
  let isLoading = useSelector(
    (state) => state.loading.isLoading,
  );
  return <>
      <AppLoadingWrapper
        visible={isLoading}
        closable={false}
        footer={null}
        style={{ top: '35%'}}
        width={180}
      >
      <div style={{display:'flex',justifyContent:'center'}}>
        <img
          style={{
          width: '120px',
        }}
          src={loading}
          alt="loading..."
        />
        </div>
      </AppLoadingWrapper>
      {props.children}
      </>
};

export default AppLoadingProvider;
