// export function getProjectsRequest() {
//   return {
//     type: '@projects/GET_PROJECTS_REQUEST',
//   };
// }

// export function getProjectsSuccess(data) {
//   return {
//     type: '@projects/GET_PROJECTS_SUCCESS',
//     payload: { data },
//   };
// }

// export function createProjectRequest(title) {
//   return {
//     type: '@projects/CREATE_PROJECT_REQUEST',
//     payload: { title },
//   };
// }

// export function createProjectSuccess(project) {
//   return {
//     type: '@projects/CREATE_PROJECT_SUCCESS',
//     payload: { project },
//   };
// }

export function openMembersModal() {
  return {
    type: '@members/OPEN_MEMBERS_MODAL',
  };
}

export function closeMembersModal() {
  return {
    type: '@members/CLOSE_MEMBERS_MODAL',
  };
}
