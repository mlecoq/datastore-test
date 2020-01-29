// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateProject = /* GraphQL */ `
  subscription OnCreateProject($owner: String!) {
    onCreateProject(owner: $owner) {
      id
      title
      description
      archived
      reports {
        nextToken
        startedAt
      }
      accountId
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateProject = /* GraphQL */ `
  subscription OnUpdateProject($owner: String!, $editors: String!) {
    onUpdateProject(owner: $owner, editors: $editors) {
      id
      title
      description
      archived
      reports {
        nextToken
        startedAt
      }
      accountId
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteProject = /* GraphQL */ `
  subscription OnDeleteProject($owner: String!) {
    onDeleteProject(owner: $owner) {
      id
      title
      description
      archived
      reports {
        nextToken
        startedAt
      }
      accountId
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateReport = /* GraphQL */ `
  subscription OnCreateReport($owner: String!) {
    onCreateReport(owner: $owner) {
      id
      projectId
      number
      title
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      remarks {
        nextToken
        startedAt
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateReport = /* GraphQL */ `
  subscription OnUpdateReport($owner: String!, $editors: String!) {
    onUpdateReport(owner: $owner, editors: $editors) {
      id
      projectId
      number
      title
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      remarks {
        nextToken
        startedAt
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteReport = /* GraphQL */ `
  subscription OnDeleteReport {
    onDeleteReport {
      id
      projectId
      number
      title
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      remarks {
        nextToken
        startedAt
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateRemark = /* GraphQL */ `
  subscription OnCreateRemark($owner: String!) {
    onCreateRemark(owner: $owner) {
      id
      projectId
      reportId
      title
      description
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      report {
        id
        projectId
        number
        title
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateRemark = /* GraphQL */ `
  subscription OnUpdateRemark($owner: String!, $editors: String!) {
    onUpdateRemark(owner: $owner, editors: $editors) {
      id
      projectId
      reportId
      title
      description
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      report {
        id
        projectId
        number
        title
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteRemark = /* GraphQL */ `
  subscription OnDeleteRemark {
    onDeleteRemark {
      id
      projectId
      reportId
      title
      description
      project {
        id
        title
        description
        archived
        accountId
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      report {
        id
        projectId
        number
        title
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      editors
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
