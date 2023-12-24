import axios from "axios";
// Set up a rate limit configuration object
const rateLimitConfig = {
  maxRequests: 10, // Maximum number of requests allowed per time period
  timePeriod: 60000, // Time period in milliseconds (e.g. 1 minute)
  currentRequests: 0,
  onRateLimited: () => {
    console.log("Rate limit exceeded");
  },
};
// Create a custom axios instance with the rate limit interceptor
const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_LOCAL,
});
apiClient.interceptors.request.use((config) => {
  // Check if the rate limit has been exceeded
  if (rateLimitConfig.currentRequests >= rateLimitConfig.maxRequests) {
    // If the rate limit has been exceeded, trigger the onRateLimited callback and return a rejected promise
    rateLimitConfig.onRateLimited();
    return Promise.reject(new Error("Rate limit exceeded"));
  }
  // If the rate limit has not been exceeded, increment the currentRequests counter and continue with the request
  rateLimitConfig.currentRequests++;
  return config;
});

// Reset the currentRequests counter at the start of each time period
setInterval(() => {
  rateLimitConfig.currentRequests = 0;
}, rateLimitConfig.timePeriod);

export default apiClient;
