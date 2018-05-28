import * as AuthActions from './auth.actions';
export interface State {
  token: string;
  authenticate: boolean;
}

const initalState: State = {
  token: null,
  authenticate: false
}

export function authReducer(state = initalState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticate: true
      }
    case (AuthActions.LOGOUT):
      return {
        ...state,
        authenticate: false,
        token: null
      }
    case (AuthActions.SET_TOKEN):
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
