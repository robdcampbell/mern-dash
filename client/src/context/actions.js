export const DISPLAY_ALERT = "SHOW_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

export const REGISTER_USER_BEGIN = "REGISTER_USER_BEGIN";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const LOGIN_USER_BEGIN = "LOGIN_USER_BEGIN";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

// *** Will use the SETUP_ prefix to begin, as both functionalities are quite similar. But when introducing other auth functionality (i.e. email verification, password reset, etc..) will revert back to indivdual Context Workflows for each action.

export const SETUP_USER_BEGIN = "SETUP_USER_BEGIN";
export const SETUP_USER_SUCCESS = "SETUP_USER_SUCCESS";
export const SETUP_USER_ERROR = "SETUP_USER_ERROR";
