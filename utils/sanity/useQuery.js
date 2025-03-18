import * as queryStore from "@sanity/react-loader";

// Exports to be used in client-only or components that render both server and client
export const useQuery = (query, params, options) => {
  const snapshot = queryStore.useQuery(query, params, options);
  // Always throw errors if there are any
  if (snapshot.error) {
    throw snapshot.error;
  }
  return snapshot;
};
// Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
