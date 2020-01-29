/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateProjectInput = {
  id?: string | null,
  title: string,
  description?: string | null,
  archived?: boolean | null,
  accountId?: string | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type UpdateProjectInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  archived?: boolean | null,
  accountId?: string | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteProjectInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateReportInput = {
  id?: string | null,
  projectId: string,
  number?: string | null,
  title?: string | null,
  project?: ProjectInput | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ProjectInput = {
  id: string,
  title: string,
  description?: string | null,
  archived?: boolean | null,
  accountId?: string | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateReportInput = {
  id: string,
  projectId?: string | null,
  number?: string | null,
  title?: string | null,
  project?: ProjectInput | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteReportInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateRemarkInput = {
  id?: string | null,
  projectId: string,
  reportId: string,
  title: string,
  description?: string | null,
  project?: ProjectInput | null,
  report?: ReportInput | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type ReportInput = {
  id: string,
  projectId: string,
  number?: string | null,
  title?: string | null,
  project?: ProjectInput | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateRemarkInput = {
  id: string,
  projectId?: string | null,
  reportId?: string | null,
  title?: string | null,
  description?: string | null,
  project?: ProjectInput | null,
  report?: ReportInput | null,
  editors?: Array< string | null > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
  _version?: number | null,
};

export type DeleteRemarkInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelProjectFilterInput = {
  id?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  archived?: ModelBooleanFilterInput | null,
  accountId?: ModelStringFilterInput | null,
  editors?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelProjectFilterInput | null > | null,
  or?: Array< ModelProjectFilterInput | null > | null,
  not?: ModelProjectFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBooleanFilterInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelReportFilterInput = {
  id?: ModelIDFilterInput | null,
  projectId?: ModelIDFilterInput | null,
  number?: ModelStringFilterInput | null,
  title?: ModelStringFilterInput | null,
  editors?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelReportFilterInput | null > | null,
  or?: Array< ModelReportFilterInput | null > | null,
  not?: ModelReportFilterInput | null,
};

export type ModelRemarkFilterInput = {
  id?: ModelIDFilterInput | null,
  projectId?: ModelIDFilterInput | null,
  reportId?: ModelIDFilterInput | null,
  title?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  editors?: ModelStringFilterInput | null,
  createdAt?: ModelStringFilterInput | null,
  updatedAt?: ModelStringFilterInput | null,
  and?: Array< ModelRemarkFilterInput | null > | null,
  or?: Array< ModelRemarkFilterInput | null > | null,
  not?: ModelRemarkFilterInput | null,
};

export type CreateProjectMutationVariables = {
  input: CreateProjectInput,
};

export type CreateProjectMutation = {
  createProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type UpdateProjectMutationVariables = {
  input: UpdateProjectInput,
};

export type UpdateProjectMutation = {
  updateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type DeleteProjectMutationVariables = {
  input: DeleteProjectInput,
};

export type DeleteProjectMutation = {
  deleteProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type CreateReportMutationVariables = {
  input: CreateReportInput,
};

export type CreateReportMutation = {
  createReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type UpdateReportMutationVariables = {
  input: UpdateReportInput,
};

export type UpdateReportMutation = {
  updateReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type DeleteReportMutationVariables = {
  input: DeleteReportInput,
};

export type DeleteReportMutation = {
  deleteReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type CreateRemarkMutationVariables = {
  input: CreateRemarkInput,
};

export type CreateRemarkMutation = {
  createRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type UpdateRemarkMutationVariables = {
  input: UpdateRemarkInput,
};

export type UpdateRemarkMutation = {
  updateRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type DeleteRemarkMutationVariables = {
  input: DeleteRemarkInput,
};

export type DeleteRemarkMutation = {
  deleteRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type SyncProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncProjectsQuery = {
  syncProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetProjectQueryVariables = {
  id: string,
};

export type GetProjectQuery = {
  getProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type ListProjectsQueryVariables = {
  filter?: ModelProjectFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProjectsQuery = {
  listProjects:  {
    __typename: "ModelProjectConnection",
    items:  Array< {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncReportsQuery = {
  syncReports:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetReportQueryVariables = {
  id: string,
};

export type GetReportQuery = {
  getReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type ListReportsQueryVariables = {
  filter?: ModelReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReportsQuery = {
  listReports:  {
    __typename: "ModelReportConnection",
    items:  Array< {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncRemarksQueryVariables = {
  filter?: ModelRemarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRemarksQuery = {
  syncRemarks:  {
    __typename: "ModelRemarkConnection",
    items:  Array< {
      __typename: "Remark",
      id: string,
      projectId: string,
      reportId: string,
      title: string,
      description: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetRemarkQueryVariables = {
  id: string,
};

export type GetRemarkQuery = {
  getRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type ListRemarksQueryVariables = {
  filter?: ModelRemarkFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRemarksQuery = {
  listRemarks:  {
    __typename: "ModelRemarkConnection",
    items:  Array< {
      __typename: "Remark",
      id: string,
      projectId: string,
      reportId: string,
      title: string,
      description: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateProjectSubscriptionVariables = {
  owner: string,
};

export type OnCreateProjectSubscription = {
  onCreateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnUpdateProjectSubscriptionVariables = {
  owner: string,
  editors: string,
};

export type OnUpdateProjectSubscription = {
  onUpdateProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnDeleteProjectSubscriptionVariables = {
  owner: string,
};

export type OnDeleteProjectSubscription = {
  onDeleteProject:  {
    __typename: "Project",
    id: string,
    title: string,
    description: string | null,
    archived: boolean | null,
    reports:  {
      __typename: "ModelReportConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    accountId: string | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnCreateReportSubscriptionVariables = {
  owner: string,
};

export type OnCreateReportSubscription = {
  onCreateReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnUpdateReportSubscriptionVariables = {
  owner: string,
  editors: string,
};

export type OnUpdateReportSubscription = {
  onUpdateReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnDeleteReportSubscription = {
  onDeleteReport:  {
    __typename: "Report",
    id: string,
    projectId: string,
    number: string | null,
    title: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    remarks:  {
      __typename: "ModelRemarkConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnCreateRemarkSubscriptionVariables = {
  owner: string,
};

export type OnCreateRemarkSubscription = {
  onCreateRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnUpdateRemarkSubscriptionVariables = {
  owner: string,
  editors: string,
};

export type OnUpdateRemarkSubscription = {
  onUpdateRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};

export type OnDeleteRemarkSubscription = {
  onDeleteRemark:  {
    __typename: "Remark",
    id: string,
    projectId: string,
    reportId: string,
    title: string,
    description: string | null,
    project:  {
      __typename: "Project",
      id: string,
      title: string,
      description: string | null,
      archived: boolean | null,
      accountId: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    report:  {
      __typename: "Report",
      id: string,
      projectId: string,
      number: string | null,
      title: string | null,
      editors: Array< string | null > | null,
      createdAt: string | null,
      updatedAt: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      owner: string | null,
    } | null,
    editors: Array< string | null > | null,
    createdAt: string | null,
    updatedAt: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    owner: string | null,
  } | null,
};
