// tslint:disable
// this is an auto generated file. This will be overwritten

export const syncProjects = /* GraphQL */ `
  query SyncProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getProject = /* GraphQL */ `
  query GetProject($id: ID!) {
    getProject(id: $id) {
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
export const listProjects = /* GraphQL */ `
  query ListProjects(
    $filter: ModelProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncReports = /* GraphQL */ `
  query SyncReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncReports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getReport = /* GraphQL */ `
  query GetReport($id: ID!) {
    getReport(id: $id) {
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
export const listReports = /* GraphQL */ `
  query ListReports(
    $filter: ModelReportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRemarks = /* GraphQL */ `
  query SyncRemarks(
    $filter: ModelRemarkFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRemarks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        projectId
        reportId
        title
        description
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getRemark = /* GraphQL */ `
  query GetRemark($id: ID!) {
    getRemark(id: $id) {
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
export const listRemarks = /* GraphQL */ `
  query ListRemarks(
    $filter: ModelRemarkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRemarks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectId
        reportId
        title
        description
        editors
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
