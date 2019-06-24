/**
 * Mostrar Hola Mundo
*/

const getMessage = (req, res) => {
  res.json({
    message: 'Get message',
  });
};

const postMessage = (req, res) => {
  res.json({
    message: 'Post Message',
  });
};

const putMessage = (req, res) => {
  res.json({
    message: 'Put message',
  });
};

const deleteMessage = (req, res) => {
  res.json({
    message: 'Delete Message',
  });
};

module.exports = {
  getMessage,
  postMessage,
  putMessage,
  deleteMessage,
};
