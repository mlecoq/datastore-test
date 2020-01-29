import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "@reach/router";
import { DataStore } from "@aws-amplify/datastore";
import { Project } from "../../models";

import CreateProject from "./CreateProject";

const ProjectList: React.FC<RouteComponentProps> = () => {
  const [projects, setProjects] = useState<Project[]>();

  useEffect(() => {
    (async () => {
      const projects = await DataStore.query(Project);

      setProjects(projects);
    })();
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Project).subscribe(msg => {
      switch (msg.opType) {
        case "INSERT":
          setProjects([...(projects || []), msg.element]);
          break;
        case "UPDATE":
          setProjects(
            projects?.map(project =>
              project.id === msg.element.id ? msg.element : project
            )
          );
          break;
        case "DELETE":
          setProjects(
            projects?.filter(project => project.id !== msg.element.id)
          );
          break;
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [projects]);

  return projects ? (
    <>
      <div>
        {projects.map(project => (
          <div key={project?.id}>{project?.title}</div>
        ))}
      </div>
      <CreateProject />
    </>
  ) : null;
};

export default ProjectList;
