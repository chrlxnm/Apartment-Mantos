import { useDispatch, useSelector } from 'react-redux';

import { AppFetchErrorWrapper } from './style';
import { Button } from 'antd';
import { hideModal } from '../../redux/action/generalAction';
import loading from '../../assets/gif/loading.gif';

const AppFetchErrorProvider = (props) => {
  const dispatch = useDispatch();
  let modal = useSelector(
    (state) => state.loading.modal,
  );
  console.log('test isi',modal)
  return <>
      <AppFetchErrorWrapper
        visible={modal?.visible}
        closable={false}
        footer={null}
        style={{ top: '35%'}}
        width={180}
      >
      <div style={{textAlign:'center'}}>
        <h1> Error </h1>
        <p>{modal?.message}</p>
        <Button type='primary' shape='round' size='large' onClick={() => dispatch(hideModal())}>
          Close
        </Button>
        </div>
      </AppFetchErrorWrapper>
      {props.children}
      </>
};

export default AppFetchErrorProvider;
