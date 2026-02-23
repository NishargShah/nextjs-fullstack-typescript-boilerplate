// eslint-disable-next-line import-x/no-rename-default
import clientConstants from '@/constants';

export const HTTP_STATUSES = {
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  NOT_ACCEPTABLE: 406,
  PAYLOAD_LARGE: 413,
  TOO_MANY_REQUESTS: 429,
  SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;

const ERRORS = {
  UNKNOWN_ERROR: 'Something went wrong, please try again later!',
  TECHNICAL_ERROR: 'It’s not you. It’s us. Give it another try, please!',
  FORBIDDEN_ERROR: 'You do not have permission to perform this action',
  UNAUTHORIZED_ERROR: 'You are not logged in! please log in to get access',
  TOKEN_USER_NOT_EXIST_ERROR: 'The user belonging to this token does no longer exist',
  INVALID_USER_TOKEN_ERROR: 'Invalid user token. Please log in again!',
  USER_TOKEN_EXPIRED_ERROR: 'Your token has expired. Please log in again!',
  RATE_LIMIT_ERROR: 'Too many requests from this IP, please try again in an hour!',
  MAINTENANCE_ERROR:
    'This site is currently unable to handle the HTTP request due to a maintenance of the server. Please try after some time',
  JSON_PARSE_ERROR: 'Invalid JSON',
  CORS_ERROR: 'Cors not enabled for this site, please contact your admin.',
  CONNECTION_ERROR:
    "We're experiencing some issues with connecting to the database at the moment. Please try again later.",
} as const;

const MESSAGES = {
  API_HANDSHAKE: 'Hi, I am an API Home Page',
  INVALID_DATA: 'Provided data is invalid',
  NO_DATA_FOUND: 'No Data Found',
  ID_NOT_FOUND: 'No data found with this id',
  ALREADY_EXIST: 'Already Exist',
  LOGIN_MESSAGE: 'Logged in Successfully',
  LOGOUT_MESSAGE: 'Logout Successful',
  PROFILE_RETRIEVED: 'Profile Fetched Successfully',
  INCORRECT_LOGIN: 'Incorrect email or password',
  USERS_RETRIEVED: 'Users retrieved successfully.',
} as const;

const constants = {
  ...clientConstants,
  ...HTTP_STATUSES,
  ...ERRORS,
  ...MESSAGES,
} as const;

export default constants;
