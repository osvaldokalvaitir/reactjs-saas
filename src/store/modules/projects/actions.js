export function getProjectsRequest() {
  return {
    type: '@projects/GET_PROJECTS_REQUEST',
  };
}

export function getProjectsSuccess(data) {
  return {
    type: '@projects/GET_PROJECTS_SUCCESS',
    payload: { data },
  };
}
