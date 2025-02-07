let userConfig = undefined;
try {
  userConfig = await import('./v0-user-next.config');
} catch (e) {
  // Ignore error if the user-specific config file does not exist
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: false,           // Disable the build worker
    parallelServerBuildTraces: false,    // Disable parallel build traces
    parallelServerCompiles: false,       // Disable parallel server compiles
    layers: true,                        // Enable layers to prevent the Webpack error
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: 'error' }; // Reduce logging noise
    config.parallelism = 1;                            // Disable Webpack parallelism to prevent memory issues
    return config;
  },
  env: {
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    EMAIL_SENDER: process.env.EMAIL_SENDER,
  },
};

// Merge user-specific config if present
mergeConfig(nextConfig, userConfig);

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
