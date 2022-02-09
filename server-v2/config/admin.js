module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e67e74b08e1bfc488ab8922126e13448'),
  },
});
