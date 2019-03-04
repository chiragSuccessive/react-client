import moment from 'moment';

const getDateFormatted = createdAt => (
  moment(createdAt).format('dddd, MMMM Do YYYY, h:mm:ss a')
);
export default getDateFormatted;
