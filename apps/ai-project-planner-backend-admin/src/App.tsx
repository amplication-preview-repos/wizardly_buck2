import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { FunctionalRequirementList } from "./functionalRequirement/FunctionalRequirementList";
import { FunctionalRequirementCreate } from "./functionalRequirement/FunctionalRequirementCreate";
import { FunctionalRequirementEdit } from "./functionalRequirement/FunctionalRequirementEdit";
import { FunctionalRequirementShow } from "./functionalRequirement/FunctionalRequirementShow";
import { LibraryFrameworkList } from "./libraryFramework/LibraryFrameworkList";
import { LibraryFrameworkCreate } from "./libraryFramework/LibraryFrameworkCreate";
import { LibraryFrameworkEdit } from "./libraryFramework/LibraryFrameworkEdit";
import { LibraryFrameworkShow } from "./libraryFramework/LibraryFrameworkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AI Project Planner Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="FunctionalRequirement"
          list={FunctionalRequirementList}
          edit={FunctionalRequirementEdit}
          create={FunctionalRequirementCreate}
          show={FunctionalRequirementShow}
        />
        <Resource
          name="LibraryFramework"
          list={LibraryFrameworkList}
          edit={LibraryFrameworkEdit}
          create={LibraryFrameworkCreate}
          show={LibraryFrameworkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
