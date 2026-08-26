const initState = {
  themeId: 1,
};

// Типизируем стейт автоматически на основе initState
export type State = typeof initState;

// Типизируем экшен
export type Action = {
  type: 'SET_THEME_ID';
  id: number;
};

// 1 - Написали нужные типы вместо any, дописали редюсер
export const themeReducer = (state: State = initState, action: Action): State => {
  switch (action.type) {
    case 'SET_THEME_ID':
      return {
        ...state,
        themeId: action.id,
      };

    default:
      return state;
  }
};

// Исправили any на возвращаемый тип Action
export const changeThemeId = (id: number): Action => ({
  type: 'SET_THEME_ID',
  id,
});
