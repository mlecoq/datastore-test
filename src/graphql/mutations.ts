// tslint:disable
// this is an auto generated file. This will be overwritten

export const createProject = /* GraphQL */ `
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
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
export const updateProject = /* GraphQL */ `
  mutation UpdateProject($input: UpdateProjectInput!) {
    updateProject(input: $input) {
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
export const deleteProject = /* GraphQL */ `
  mutation DeleteProject($input: DeleteProjectInput!) {
    deleteProject(input: $input) {
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
export const createReport = /* GraphQL */ `
  mutation CreateReport($input: CreateReportInput!) {
    createReport(input: $input) {
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
export const updateReport = /* GraphQL */ `
  mutation UpdateReport($input: UpdateReportInput!) {
    updateReport(input: $input) {
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
export const deleteReport = /* GraphQL */ `
  mutation DeleteReport($input: DeleteReportInput!) {
    deleteReport(input: $input) {
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
export const createRemark = /* GraphQL */ `
  mutation CreateRemark($input: CreateRemarkInput!) {
    createRemark(input: $input) {
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
export const updateRemark = /* GraphQL */ `
  mutation UpdateRemark($input: UpdateRemarkInput!) {
    updateRemark(input: $input) {
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
export const deleteRemark = /* GraphQL */ `
  mutation DeleteRemark($input: DeleteRemarkInput!) {
    deleteRemark(input: $input) {
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
