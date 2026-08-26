import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import s2 from '../../s1-main/App.module.css';
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect';
import s from './HW12.module.css';
import { changeThemeId } from './bll/themeReducer';

// Если в глобальном сторе настроен тип RootState, импортируйте его.
// Иначе можно временно описать структуру как { theme: { themeId: number } }
type AppStoreType = {
  theme: {
    themeId: number;
  };
};

const themes = [
  { id: 1, value: 'light' },
  { id: 2, value: 'blue' },
  { id: 3, value: 'dark' },
];

const HW12 = () => {
  const dispatch = useDispatch();

  const themeId = useSelector((state: AppStoreType) => state.theme.themeId);

  const change = (id: number) => {
    dispatch(changeThemeId(id));
  };

  useEffect(() => {
    document.documentElement.dataset.theme = themeId + '';
  }, [themeId]);

  return (
    <div id={'hw12'}>
      <div id={'hw12-text'} className={s2.hwTitle}>
        Homework #12
      </div>

      <div className={s2.hw}>
        <SuperSelect
          id={'hw12-select-theme'}
          className={s.select}
          options={themes}
          value={themeId}
          onChangeOption={change}
        />
      </div>
    </div>
  );
};

export default HW12;
