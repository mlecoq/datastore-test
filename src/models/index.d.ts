import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class Project {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly archived?: boolean;
  readonly reports?: Report[];
  readonly accountId?: string;
  readonly editors?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Project>);
  static copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

export declare class Report {
  readonly id: string;
  readonly number?: string;
  readonly title?: string;
  readonly project?: Project;
  readonly remarks?: Remark[];
  readonly editors?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Report>);
  static copyOf(source: Report, mutator: (draft: MutableModel<Report>) => MutableModel<Report> | void): Report;
}

export declare class Remark {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly project?: Project;
  readonly report?: Report;
  readonly editors?: string[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Remark>);
  static copyOf(source: Remark, mutator: (draft: MutableModel<Remark>) => MutableModel<Remark> | void): Remark;
}