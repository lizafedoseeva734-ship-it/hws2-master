import { useDispatch, useSelector } from 'react-redux';
import s2 from '../../s1-main/App.module.css';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import { loadingAC } from './bll/loadingReducer';
import { AppStoreType } from './bll/store';
import { Loader } from './Loader';
import Divider from '@mui/material/Divider';

/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  const select = (state: AppStoreType) => {
    return state.loading.isLoading;
  };
  const loading = useSelector(select);
  const dispatch = useDispatch();
  // useSelector, useDispatch // пишет студент
  const isLoading = loading;

  const setLoading = () => {
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
  };

  return (
    <div id={'hw10'}>
      <div className={s2.hwTitle}>Homework #10</div>
      <Divider sx={{ mt: 1.75, mb: 4 }} />
      <div className={s2.hw}>
        {isLoading ? (
          <div id={'hw10-loading'}>
            <Loader />
          </div>
        ) : (
          <SuperButton id={'hw10-button-start-loading'} onClick={setLoading}>
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
