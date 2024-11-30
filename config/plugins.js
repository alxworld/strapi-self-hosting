const crypto = require('crypto')

module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('ADMIN_JWT_SECRET') || crypto.randomBytes(16).toString('base64'),
    },
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          credentials: {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
          },
          region: env('AWS_REGION'),
          params: {
            // ACL: 'private', // <== set ACL to private
            // signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
            Bucket: env('AWS_BUCKET'),
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
  },
<<<<<<< HEAD
})
=======
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        credentials: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
        },
        region: env('AWS_REGION'),
        params: {
          ACL: 'private', // <== set ACL to private
          signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
          Bucket: env('AWS_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
>>>>>>> 3bbdd0965317e7708c864596215fd4b6d9708c20
